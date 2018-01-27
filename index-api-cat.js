const axios = require("axios")
const express = require("express")

const app = express()
const baseURL = "https://api.v1.clinicasim.com/api/"

const api = axios.create({baseURL})

app.get("/especialidades/:category_id/:specialty_id", (request, response) => {
    api.get(`/specialties/${request.params.category_id}/${request.params.specialty_id}`)
    .then(ret => response.send (ret.data))
    //.catch(err => response.status(500).send(err.response.data))
  })

  app.listen(3000) 
  console.log("bora mah")
