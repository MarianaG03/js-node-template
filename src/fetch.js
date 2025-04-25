const response = await fetch('https://www.swapi.tech/api/people/2')
const data = await response.json()

console.log(data)
