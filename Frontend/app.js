
const form = document.querySelector("form")
const baseURL = "http://localhost:3000"
const createURL = `${baseURL}/users`

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const formdata = new FormData(event.target);
    const name = formdata.get("name");
    const password = formdata.get("password")

    const user = {
        name: name,
        password: password
    }
    
    fetch(createURL,{

        method:'POST',
        body: JSON.stringify({user}),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
    .then(response => response.json())
    .then(user => document.location.href = `http://localhost:3001/show.html?user_id=${user.id}` )

    event.target.reset();
});