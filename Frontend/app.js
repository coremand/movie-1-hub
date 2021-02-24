
const form = document.querySelector("#auth-form")
const login = document.querySelector("#login-button")

const baseURL = "http://localhost:3000"
const createURL = `${baseURL}/users`
const loginURL = `${baseURL}/login`

form.addEventListener("submit", signup)
login.addEventListener("click", (event) => singup(event,"login"))

function signup(event){
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
};
