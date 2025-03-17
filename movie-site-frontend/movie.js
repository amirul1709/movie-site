const API_LINK = `https://localhost:8000/api/v1/reviews/`

const main = document.getElementById("section")

returnMovies(API_LINK)

function returnMovies(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
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
