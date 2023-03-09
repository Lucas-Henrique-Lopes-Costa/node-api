const url = "http://localhost:5000/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      renderApiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

getUsers()

function addUser(newUser) {
  axios.post(url, newUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const newUser = {
  name: "Lucas Henrique",
  avatar: "https://github.com/Lucas-Henrique-Lopes-Costa.png",
  city: "Divinópolis"
}

addUser(newUser)

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      userName.textContent = response.data.name
      userCity.textContent = response.data.city
      userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

getUser(1)

function updateUsers(updateUser, id) {
  axios.put(`${url}/${id}`, updateUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const updateUser = {
  name:"Marco Túlio",
  avatar: "https://github.com/Lucas-Henrique-Lopes-Costa.png",
  city: "Divinópolis"
}

updateUsers(updateUser, 1)

function deleteUsers(id) {
  axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

deleteUsers(1)