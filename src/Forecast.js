import React from 'react'
import ForecastCard from './ForecastCard'
import './Forecast.css'

function Forecast ({ forecast }) {
  const [type, setType] = React.useState('hourly')

  if (!forecast[type]) return null

  const cards = forecast[type]
    .slice(0, 4)
    .map(prediction => (
      <ForecastCard key={prediction.dt} prediction={prediction} />
    ))

  function toggleType () {
    setType(prevType => (prevType === 'hourly' ? 'daily' : 'hourly'))
  }

  return (
    <section className='Forecast'>
      <header>
        <h2>{type} Forecast</h2>
        <button className='button' onClick={toggleType}>
          Show {type === 'hourly' ? 'daily' : 'hourly'}
        </button>
      </header>
      <div className='card-container'>{cards}</div>
    </section>
  )
}

export default Forecast
