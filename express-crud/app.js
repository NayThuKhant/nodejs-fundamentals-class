var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var bodyParser = require("body-parser")
const methodOverride = require("method-override")

// Load configuration settings from .env
require("dotenv").config()

// Connect to the database
require("./libs/mongoose")

var indexRouter = require("./routes/index")
var booksRouter = require("./routes/books")

var app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

// To support http methods more than GET & POST
app.use(methodOverride("_method"))

app.use("/", indexRouter)
app.use("/books", booksRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
