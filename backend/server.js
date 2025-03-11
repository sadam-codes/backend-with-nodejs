const express = require("express");
const db = require('./db')
require('dotenv').config()
const app = express();
app.use(express.json());

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


