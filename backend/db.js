const mongoose = require('mongoose');
const dbURL = 'mongodb://127.0.0.1:27017/hotels'
mongoose.connect(dbURL)
const db = mongoose.connection;
db.on('connected', () => {
    console.log("Connecetd database")
})
db.on('error', (error) => {
    console.error("DisConnecetd database", error)
})
db.on('disconnected', () => {
    console.log("DisConnecetd database")
}) 
module.exports = db