import {useShowtimes} from '../context/ShowtimesContext'

export const TheatersPage = () => {
  const { showtimes, loading, error } = useShowtimes()
  console.log(showtimes)

  const seen = new Set();
  const theaters = showtimes.filter(item => {
    if (seen.has(item.theater.id)) {
      return false
    }
    seen.add(item.theater.id)
    return true
  })


  if (error) return (<div> Couldn't load Theaters </div>)
  return (
    <>
      <ul>
        {theaters.map(theater => (
          <li key={theater.theater.id}> {console.log(theater)}{theater.theater.name} </li>
        ))}
      </ul>
    </>
  )
}