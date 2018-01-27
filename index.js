const axios = require("axios")
const express = require("express")

const app = express()
const baseURL = "https://api.github.com"

const api = axios.create({baseURL})

app.get("/seguidores/:user", (request, response) => {
    api.get(`/users/${request.params.user}/followers`)
    .then(ret => response.send (ret.data))
    .catch(err => response.status(500).send(err.response.data))
  })

  /*app.get("/busca", (request, response) => {
        api.get("/search/users", {params})
        .then(ret)
    })*/
  app.listen(3000) 
  console.log("bora mah")
//const url = "https://api.github.com/search/repositories?q=axios"
