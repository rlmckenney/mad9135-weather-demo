const API_TOKEN = 'pk.6b301c59042b98b3fd879717a81c2c2f'
const BASE_URL = 'https://us1.locationiq.com/v1'

export async function getGeolocation(location) {
  const url = `${BASE_URL}/search.php?key=${API_TOKEN}&q=${location}&format=json`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return {lat: data[0].lat, lon: data[0].lon}
}
