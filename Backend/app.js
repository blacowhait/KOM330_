require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const app = require('./express')
const db = require('./mongodb')

const port = process.env.PORT || 3000

if (!process.env.TZ) {
  process.env.TZ == "Asia/Jakarta"
}

const server = express()
app(server)
db.dbConnect()

function logMessage() {
  return () => console.log(`This App is Running on port ` + port + ` at http://localhost:` + port)
}

if (!process.env.MONGODB_URI) {
  return "database mongodb belum diisi"
}

if (!process.env.JWT_SECRET) {
  return "JWT secret belum diisi"
}

server.listen(port, logMessage())

module.exports = app;