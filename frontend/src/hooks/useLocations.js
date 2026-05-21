import { useEffect, useState } from 'react'
import { getLocations } from '../api/locations'

export default function useLocations() {
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getLocations()
      .then((res) => setLocations(res.data || []))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { locations, loading, error }
}
