import React, { useEffect } from 'react'
import { getGeolocation } from './map.service'
import { getForecast } from './weather.service'
import useLocalStorageState from './useLocalStorageState'
import AppHeader from './AppHeader/AppHeader'
import AppForm from './AppForm'
import Forecast from './Forecast'
import './App.css'
import CurrentWeather from './CurrentWeather'

function App () {
  const [searchTerm, setSearchTerm] = useLocalStorageState(
    'weather:search',
    'Kanata, ON, CA'
  )
  const [location, setLocation] = useLocalStorageState('weather:location', {
    lat: 0,
    lon: 0
  })
  const [forecast, setForecast] = useLocalStorageState('weather:forecast', {})

  useEffect(() => {
    getGeolocation(searchTerm).then(setLocation)
  }, [searchTerm, setLocation])

  useEffect(() => {
    getForecast({ coord: location }).then(setForecast)
  }, [location, setForecast])

  return (
    <div className='App'>
      <AppHeader />
      <AppForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CurrentWeather report={forecast.current} />
      <Forecast forecast={forecast} />
    </div>
  )
}

export default App
