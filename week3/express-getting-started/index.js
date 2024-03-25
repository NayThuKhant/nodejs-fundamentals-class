const express = require("express")
const app = express()

const PORT = 3000

app.get("/", (req, res) => {
  res.send("helloworld")
})

app.post("/", (req, res) => {
  res.send("POST method")
})

app.listen(PORT, () => {})
