const http = require("http")
const crypto = require("crypto")
const url = require("url")
const fs = require("fs")
const path = require("path")

const PORT = process.env.PORT || 3000
const DATA_FILE = path.join(__dirname, "data.json")

// Load initial data from JSON file
let data = []
try {
  data = JSON.parse(fs.readFileSync(DATA_FILE))
} catch (error) {
  console.error("Error reading data file:", error)
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)

  // Set response headers
  res.setHeader("Content-Type", "application/json")

  // Route handling
  if (req.method === "GET" && parsedUrl.pathname === "/api/data") {
    res.statusCode = 200
    res.end(JSON.stringify(data))
  } else if (req.method === "POST" && parsedUrl.pathname === "/api/data") {
    let body = ""
    req.on("data", (chunk) => {
      body += chunk.toString()
    })
    req.on("end", () => {
      const newData = JSON.parse(body)
      data.push(newData)
      fs.writeFileSync(DATA_FILE, JSON.stringify(data))
      res.statusCode = 201
      res.end(JSON.stringify({ message: "Data added successfully" }))
    })
  } else if (req.method === "PUT" && parsedUrl.pathname === "/api/data") {
    let body = ""
    req.on("data", (chunk) => {
      body += chunk.toString()
    })
    req.on("end", () => {
      const updatedData = JSON.parse(body)
      const dataIndex = data.findIndex((item) => item.id === updatedData.id)
      if (dataIndex !== -1) {
        data[dataIndex] = updatedData
        fs.writeFileSync(DATA_FILE, JSON.stringify(data))
        res.statusCode = 200
        res.end(JSON.stringify({ message: "Data updated successfully" }))
      } else {
        res.statusCode = 404
        res.end(JSON.stringify({ error: "Data not found" }))
      }
    })
  } else if (req.method === "DELETE" && parsedUrl.pathname === "/api/data") {
    const id = parsedUrl.query.id
    const dataIndex = data.findIndex((item) => item.id === id)
    if (dataIndex !== -1) {
      data.splice(dataIndex, 1)
      fs.writeFileSync(DATA_FILE, JSON.stringify(data))
      res.statusCode = 200
      res.end(JSON.stringify({ message: "Data deleted successfully" }))
    } else {
      res.statusCode = 404
      res.end(JSON.stringify({ error: "Data not found" }))
    }
  } else {
    res.statusCode = 404
    res.end(JSON.stringify({ error: "Endpoint not found" }))
  }
})

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
