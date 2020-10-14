const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall'
const API_KEY = '54fbd5dc57e65051f6052821364fa98e'
const DEFAULT_OPTIONS = {
  coord: {lon: -75.76, lat: 45.35}, // Algonquin College
  units: 'metric'
}
const cache = new Map()

/**
 * @typedef {Object} APIOptions
 * @property {string} units [metric, imperial, standard]
 * @property {Object} coord Location coordinates
 * @property {number} coord.lon Longitude
 * @property {number} coord.lat Latitude
 */

/**
 * Get the latest weather forecast for the given location.
 * Results are cached for 10 minutes.
 * @param {APIOptions} options
 * @returns {Object} Forecast results
 * @see https://openweathermap.org/api/one-call-api#data
 */
export async function getForecast(options) {
  const {coord, units} = Object.assign({}, DEFAULT_OPTIONS, options)
  const cacheItem = cache.get(coord)
  if (cacheItem && !isExpired(cacheItem.current.dt)) {
    return cacheItem
  }
  const forecast = await fetchForecast({units, coord})
  cache.set(coord, forecast)
  return forecast

  /**
   * Helper function to check cache expiry
   * @param {number} cacheTime UNIX timestamp in seconds
   */
  function isExpired(cacheTime) {
    const TEN_MINUTES = 600 // seconds
    const currentTime = Math.floor(Date.now() / 1000) // convert from ms to s
    const elapsedTime = currentTime - cacheTime
    return elapsedTime > TEN_MINUTES
  }
}

/**
 * Private function to make the actual `fetch()` call to the API
 * @param {APIOptions} options
 */
async function fetchForecast({coord: {lat, lon}, units}) {
  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
  const response = await fetch(url)
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}

/**
 * Returns an <img> HTMLElement with the correct URL to display
 * the OpenWeather image cooresponding to the given `iconCode`.
 * @param {string} iconCode
 */
export function createWeatherIcon(iconCode) {
  let img = document.createElement('img')
  img.setAttribute(
    'src',
    'https://openweathermap.org/img/w/' + iconCode + '.png'
  )
  img.setAttribute('alt', '')
  return img
}
