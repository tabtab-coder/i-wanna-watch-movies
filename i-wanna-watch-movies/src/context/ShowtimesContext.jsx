import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const ShowtimesContext = createContext(null)

export const ShowtimesProvider = ({ children }) => {
  const [showtimes, setShowtimes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const load = useCallback(async () => {
    console.log('[showtimes] fetching…')
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('http://localhost:3001/api/listings')
      console.log('[showtimes] response', res.status, res.url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      console.log('[showtimes] received', data.length, 'rows; first:', data[0])
      setShowtimes(data)
    } catch (e) {
      console.error('[showtimes] failed', e)
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load])

  // logs the provider's state after every change
  useEffect(() => {
    console.log('[showtimes] state', { loading, error, count: showtimes.length })
  }, [showtimes, loading, error])

  return (
    <ShowtimesContext.Provider value={{ showtimes, loading, error, reload: load }}>
      {children}
    </ShowtimesContext.Provider>
  )
}

export const useShowtimes = () => useContext(ShowtimesContext)