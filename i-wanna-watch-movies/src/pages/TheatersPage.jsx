import {useShowtimes} from '../context/ShowtimesContext'
import {Maps} from '../components/TheaterMaps'
import {TheaterAccordion} from '../components/TheaterAccordion'

export const TheatersPage = () => {

  const { showtimes, loading, error } = useShowtimes()

  const theaters = [...new Map(showtimes.map(s => [s.theater.id, s.theater])).values()]

  const filmsByTheater = new Map(theaters.map(t => [t.id, showtimes.filter(s => s.theater.id === t.id).map(f => f.film)]))

  if (error) return (<div> Couldn't load Theaters </div>)
  return (
    <>
      <TheaterAccordion theaters={theaters} filmsByTheater={filmsByTheater} />
      <Maps theaters={theaters}/>
    </>
  )
}