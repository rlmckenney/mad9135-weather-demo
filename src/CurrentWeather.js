import React from 'react'

function CurrentWeather ({ report }) {
  return (
    <section style={{ padding: '1rem' }}>
      <h2>Current Weather</h2>
      <pre>{JSON.stringify(report, null, 2)}</pre>
    </section>
  )
}

export default CurrentWeather
