const url = "http://localhost:5000/api"

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

getUsers()

function getUser() {
  fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

getUser()

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json;charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
  name: "Lucas Henrique",
  avatar: "https://github.com/Lucas-Henrique-Lopes-Costa.png",
  city: "Divinópolis"
}

// addUser(newUser)

function updateUsers(updateUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updateUser),
    headers: {
      "Content-type": "application/json;charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const updateUser = {
  name:"Marco Túlio",
  avatar: "https://github.com/Lucas-Henrique-Lopes-Costa.png",
  city: "Divinópolis"
}

// updateUsers(deleteUser, 1)

function deleteUsers(deleteUser, id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json;charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const deleteUser = {
  name:"Marco Túlio",
  avatar: "https://github.com/Lucas-Henrique-Lopes-Costa.png",
  city: "Divinópolis"
}

// deleteUsers(deleteUser, 1)
