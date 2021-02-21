const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");

const baseURL = "http://localhost:3000"
const movieURL = `${baseURL}/movies`

fetch(movieURL)
.then(response => response.json())
.then(result => {
    let newData = result.results
    let showData = document.querySelector(".show__page")
    let ul = document.querySelector(".list")
    newData.forEach(object => {
        let path = `https://image.tmdb.org/t/p/w500/${object.poster_path}`;
        let li = document.createElement("li")
       // let img = document.createElement("img")

       // img.setAttribute("src",`${path}`)
       // img.setAttribute("alt","movie-picture")
       // img.setAttribute("width","300rem")
        
      //  li.append(img)
      //  ul.append(li)
       
      //  showData.appendChild(ul)

      let div = document.createElement("div")
      let img = document.createElement("img")
      let div2 = document.createElement("div")
      let title = document.createElement("h2")
      let link = document.createElement("a")
      let $button = document.createElement("button")

      $button.setAttribute("type", "button")
      $button.className = "btn btn-lg btn-primary"
      $button.setAttribute("data-bs-container", "body")
      $button.setAttribute("data-bs-toggle","popover")
      $button.setAttribute("data-bs-placement","top")
      $button.setAttribute("data-bs-content",`${object.overview}`)
      $button.textContent = "show description"
      $button.setAttribute("style","margin-right: 2rem")


      div.className = "card"
      div.setAttribute("style","width: 25rem")

      img.setAttribute("src", `${path}`)
      img.setAttribute("alt", "movie picture")
      img.className = "card-img-top"

      div2.className = "card-body"
      title.className = "card-title"
      title.textContent = `${object.title}`

      link.className = "btn btn-primary"
      link.setAttribute("href", "#")
      link.textContent = "Go somewhere"
      
      ul.append(li)
      li.append(div)
      div.append(img,div2)
      div2.append(title,$button,link)
      

    })

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
    })
});

const $image = document.querySelector(".user-nav__current-user-pics")
$image.addEventListener("click", (event) => {
    console.log("you clicked me")
})
