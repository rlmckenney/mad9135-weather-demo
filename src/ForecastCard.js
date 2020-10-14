import React from 'react'
import ForecastIcon from './ForecastIcon'

function formatDate (timestamp) {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
  }
  return new Intl.DateTimeFormat('en-CA', options).format(
    new Date(timestamp * 1000)
  )
}

export default function ForecastCard ({ prediction }) {
  return (
    <div className='ForecastCard'>
      <p>{formatDate(prediction.dt)}</p>
      <ForecastIcon iconCode={prediction.weather[0].icon} />
      <span>{prediction.weather[0].description}</span>
      <pre>{JSON.stringify(prediction, null, 2)}</pre>
    </div>
  )
}
