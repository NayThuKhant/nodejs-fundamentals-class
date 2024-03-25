var express = require("express")
var router = express.Router()

router.get("/", function (req, res, next) {
  res.send("Books have been retrievedss")
})

router.post("/", function (req, res, next) {
  res.send("POST")
})

router.put("/:id", function (req, res, next) {
  res.send(req.params.id)
})

module.exports = router
