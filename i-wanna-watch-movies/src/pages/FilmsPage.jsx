import {useShowtimes} from '../context/ShowtimesContext'
import FilmCard from '../components/FilmCards';
import { Grid } from '@mui/material'


export const FilmsPage = () => {

  const { showtimes, loading, error } = useShowtimes();

  if (error) return <p>Couldn't load Films</p>
  if (loading) return <p>Loading…</p>

  const films = [...new Map(showtimes.map(s => [s.film.id, s.film])).values()]


  return (
    <Grid container spacing={2}>
      {films.map(film => (
        <Grid key={film.id} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
          <FilmCard film={film} />
        </Grid>
      ))}
    </Grid>
  )
}