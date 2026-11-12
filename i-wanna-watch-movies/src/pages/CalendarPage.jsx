import { useEffect, useState } from 'react'
import { EventCalendar } from '@mui/x-scheduler/event-calendar';

const DEFAULT_RUNTIME_MINUTES = 30

const HEX_TO_PALETTE = {
  '#1e88e5': 'blue', '#fb8c00': 'orange', '#00897b': 'teal', '#f9a825': 'amber',
  '#43a047': 'green', '#e53935': 'red', '#8e24aa': 'purple', '#d81b60': 'pink',
}

const endTimeCalculator = (showDate, showTime, film) => {
  console.log(film)
  const runtime = film.runtime && film.runtime >= 40 ? film.runtime : DEFAULT_RUNTIME_MINUTES
  const start = new Date(`${showDate}T${showTime}`)
  const end = new Date(start)
  end.setMinutes(end.getMinutes() + runtime)
  return end.toISOString()
}

export const CalendarPage = () => {
  const [showtimes, setShowtimes] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const ignore = false

    const fetchData = async () => {
      try{
        const response = await fetch('http://localhost:3001/api/showtimes')
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
        const result = await response.json()
        // if (!ignore) 
        setShowtimes(result)
        console.log(result)
      }catch (error){
        // if (!ignore) setError(e)
        throw new Error(`HTTP error: ${error}`);
      }
    }
    fetchData()
    // return () => {ignore = true}
  }, [])


  const theaters = [...new Map(showtimes.map(s => [s.listing.theater.id, s.listing.theater])).values()]
  
  const resources = theaters.map(t => 
    ({ 
      title: t.name, 
      id: t.id, 
      eventColor: HEX_TO_PALETTE[t.color] ?? 'grey' 
    }))

  const newEvents = showtimes
  .filter(s => s.showDate !== null && s.showTime !== null)
  .map(t => 
  ({
    id: t.id,
    start: `${t.showDate}T${t.showTime}`,
    end: endTimeCalculator(t.showDate, t.showTime, t.listing.film),
    title: t.listing.film.title,
    resource: t.listing.theater.id
  })
  )

  if (error) return <p>Couldn't load showtimes: {error.message}</p>

  return (
    <div style={{ height: 'calc(100vh - 68px)', width: '100%' }}>
      <EventCalendar
        events={newEvents}
        resources={resources}
        defaultVisibleDate={new Date()}
        readOnly
        viewConfig={{ week: { startTime: 7, endTime: 24 } }}
        defaultPreferences={{ isSidePanelOpen: false }}
      />
    </div>
  );
}
