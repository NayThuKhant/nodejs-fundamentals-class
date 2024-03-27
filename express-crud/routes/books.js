var express = require("express")
var router = express.Router()
const Book = require("../models/book")

router.get("/", async function (req, res, next) {
  const books = await Book.find()

  res.render("books/index", { books })
})

router.post(
  "/",
  (req, res, next) => {
    console.log("Request URL:", req.originalUrl)
    //next()
  },
  async function (req, res, next) {
    const { title, author } = req.body

    await Book.create({ title, author })
    res.redirect("/books")
  }
)

router.get("/create", function (req, res, next) {
  res.render("books/create")
})

router.get("/:id", async function (req, res, next) {
  const book = await Book.findById(req.params.id)

  res.render("books/update", { book })
})

router.put("/:id", async function (req, res, next) {
  const book = await Book.findById(req.params.id)
  const { title, author } = req.body

  await Book.findOneAndUpdate({ _id: req.params.id }, { title, author })
  res.redirect("/books/" + req.params.id)
})

router.delete("/:id", async function (req, res, next) {
  await Book.findOneAndDelete({ _id: req.params.id })
  res.redirect("/books")
})

module.exports = router
