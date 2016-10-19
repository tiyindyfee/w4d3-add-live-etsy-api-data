fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop'))
    .then(response => response.json())
    .then(response => console.log(response))



// http://swapi.co/api/planets/1/

// var starwarsPlanets = new XMLHttpRequest()
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/')
// starwarsPlanets.send()
//
// var starwarsPlanets = new XMLHttpRequest()
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/?page=2')
// starwarsPlanets.send()

// function planetListener() {
//     var planets = JSON.parse(this.responseText)
//     listPlanets(planets.results)
// }

fetch('http://swapi.co/api/planets/')
    .then(response => response.json())
    .then(response => listPlanets(response.results))

fetch('http://swapi.co/api/planets/1/')
    .then(response => response.json())
    .then(response => listPlanet(response))

    // .then(function(response) {
    //     return response.json()
    // })
    // .then(function(responseJson) {
    //     listPlanets(responseJson)
    // })

function listPlanets(planetsArray) {
    console.log('This comes after the first one.')

    planetsArray.forEach(function(planet) {
        var planetTitle = document.createElement('h4')
        planetTitle.innerHTML = planet.name

        document.querySelector('body').appendChild(planetTitle)
    })
}

function listPlanet(planet) {
    var list = document.createElement('ul')
    var planetName = document.createElement('li')
    planetName.innerHTML = planet.name
    list.appendChild(planetName)
    var planetGravity = document.createElement('li')
    planetGravity.innerHTML = planet.gravity
    list.appendChild(planetGravity)
    var planetPopulation = document.createElement('li')
    planetPopulation.innerHTML = planet.population
    list.appendChild(planetPopulation)

    document.querySelector('body').appendChild(list)
}

$.get('http://swapi.co/api/planets/1/', response => console.log(response))

console.log('This comes first.')
