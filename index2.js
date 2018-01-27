const axios = require("axios")
const express = require("express")

const app = express()

app.get("/hello/:id", (req, res) => {
    console.log(req.params)
    res.send(`
      Hello, ${req.query.name}!!!
      id=${req.params.id}`)
  })
  
  app.listen(3000)
  console.log("server online!")
//const url = "https://api.github.com/search/repositories?q=axios"

const baseURL = "https://api.github.com"

const api = axios.create({baseURL})

const params = { 
    q : "adelrui",
    followers: 
}

api.get("/search/users", {params})
.then(ret => {
    console.log(ret.data)
})