const http = require("http")
const url = require("url")
const fs = require("fs")
const path = require("path")
const querystring = require("querystring")

const PORT = 3000
const DATA = path.join(__dirname, "books.json")

let books = []

try {
  books = JSON.parse(fs.readFileSync(DATA))
} catch (err) {
  console.error(err)
}

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url)

  const pathname = parsedURL.pathname
  const method = req.method
  const queryParams = querystring.parse(parsedURL.query)
  console.log(queryParams)

  res.setHeader("Content-Type", "application/json")

  switch (pathname) {
    case "/api/books":
      switch (method) {
        case "GET":
          res.statusCode = 200
          res.end(JSON.stringify(books))
          break

        case "POST":
          let body = ""
          req.on("data", (chuck) => {
            body += chuck.toString()
          })

          req.on("end", () => {
            books.push(JSON.parse(body))
            fs.writeFileSync(DATA, JSON.stringify(books))

            res.statusCode = 201
            res.end()
          })

        case "DELETE":
          // extract id of book to delete, from req
          const id = queryParams.id
          // find book with given id and update it in array "books"
          // write "books" to books.json
          break

        case "DELETE":
        // extract id of book to delete, from req
        // find book with given id and delete it from array "books"
        // write "books" to books.json

        default:
          res.statusCode = 404
          res.end()
      }

    default:
      res.statusCode = 404
      res.end()
  }
})

server.listen(PORT, function () {
  console.log("Successfully started")
})
