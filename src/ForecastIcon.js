import React from 'react'

function ForecastIcon ({ iconCode }) {
  return (
    <img
      src={`https://openweathermap.org/img/w/${iconCode}.png`}
      alt=''
      height='50'
      width='50'
    />
  )
}

export default ForecastIcon
