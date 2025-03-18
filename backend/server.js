const express = require("express");
const db = require('./db')
require('dotenv').config()
const app = express();
const passport = require('passport')
app.use(express.json());


app.use(passport.initialize())

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

app.use(logRequest)
app.get('/', (req, res, next) => {
  const { username, password } = req.query; // Extract from query params

  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });

    if (!user) return res.status(401).json({ error: info.message || "Unauthorized" });

    return res.status(200).json({ message: "Login successful", user });
  })({ body: { username, password } }, res, next); // Pass manually to Passport
});


const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)
const menuRoutes = require('./routes/menu-routes')
app.use('/menu', menuRoutes)


app.listen(PORT, () => {
  console.log(`server port ${PORT} pr zinda hai`);
});


