const mongoose = require("mongoose")

const mongodbURI = process.env.MONGODB_URI

const connect = async () => {
  await mongoose.connect(mongodbURI)
}

connect()
  .then(() => {
    console.log("Database connection established")
  })
  .catch((err) => {
    console.error(`Couldn't connect to database => ${err.message}`)
    process.exit(1)
  })
