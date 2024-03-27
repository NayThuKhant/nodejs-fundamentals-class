const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String
    },

    author: {
      required: true,
      type: String
    },

    createdAt: {
      required: true,
      type: Date,
      default: Date.now
    }
  },
  { collection: "books" }
)

const Book = mongoose.model("Book", bookSchema)

module.exports = Book
