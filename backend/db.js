const mongoose = require('mongoose');
// const dbURL = 'mongodb://127.0.0.1:27017/hotels'
const dbURL = 'mongodb+srv://sadammuneer:sadam12345@cluster0.07bagy7.mongodb.net/hotels'
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
