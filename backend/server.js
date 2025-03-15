const express = require("express");
const db = require('./db')
require('dotenv').config()
const app = express();
// const person = required('./Models/personRoutes')
app.use(express.json());
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;



//
const PORT = process.env.PORT || 5000
//
// Middleware
let count = 0
const logRequest = (req, res, next) => {
  count++;
  console.log(`This url is hitted at ${new Date().toLocaleString()}  and the URL is ${req.originalUrl} and also ${count} times hitted`)
  next() // move to the next phase
}
// app.use(new localStrategy(async (username, password, done) => {
//   try {
//     console.log('Credentials Received', username, password);
//     const user = person.findOne({ username: username })
//     if (!user) {
//       return done(null, false, { message: "Incorrect username" })
//     }
//   } catch (error) {

//   }
// }))
app.use(logRequest)
app.get('/', logRequest, (req, res) => {
  res.send("Home page")
})
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)
const menuRoutes = require('./routes/menu-routes')
app.use('/menu', menuRoutes)


app.listen(PORT, () => {
  console.log(`server port ${PORT} pr zinda hai`);
});


