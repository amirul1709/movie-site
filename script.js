const API_LINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=59b3a477616535cf72279d072e8f53b8&page=1"
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=59b3a477616535cf72279d072e8f53b8&query="

const main = document.getElementById("section")
const form = document.getElementById("form")
const search = document.getElementById("query")

returnMovies(API_LINK)

function returnMovies(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            console.log(data.results)
            data.results.forEach(element => {
                const div_card = document.createElement("div")
                const div_row = document.createElement("div")
                const div_column = document.createElement("div")
                const image = document.createElement("img")
                const title = document.createElement("h3")
                const center = document.createElement("div")

                div_card.className = "card"
                div_row.className = "row"
                div_column.className = "column"
                image.className = "thumbnail"

                title.innerHTML = `${element.title}`
                image.src = IMG_PATH + element.poster_path

                center.appendChild(image)
                div_card.appendChild(center)
                div_card.appendChild(title)
                div_column.appendChild(div_card)
                div_row.appendChild(div_column)

                main.appendChild(div_row)
            })
        })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    main.innerHTML = ""

    const searchItem = search.value

    if (searchItem) {
        returnMovies(SEARCH_API + searchItem)
        search.value = ""
    }
})