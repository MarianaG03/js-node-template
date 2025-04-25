fetch('https://www.swapi.tech/api/people/2')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data) 
})