const mongoose = require('mongoose');
require('dotenv').config()
// const dbURLLocal = process.env.db_LocalURL
const dbURL = process.env.db_URL;

mongoose.connect(dbURL)
const db = mongoose.connection;
db.on('connected', () => {
    console.log("Connecetd to the database")
})
db.on('error', (error) => {
    console.error("Error to the database", error)
})
db.on('disconnected', () => {
    console.log("DisConnecetd to the database")
})
module.exports = db
