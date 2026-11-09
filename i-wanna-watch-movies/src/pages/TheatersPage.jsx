import {useShowtimes} from '../context/ShowtimesContext'
import {Maps} from '../components/Maps'


export const TheatersPage = () => {
  // const map = new LeafletMap('map').setView([51.505, -0.09], 13);
  // // new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  // //   maxZoom: 19,
  // //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  // // }).addTo(map);
  
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
      <Maps />
    </>
  )
}