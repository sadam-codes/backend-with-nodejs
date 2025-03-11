const express = require("express");
const db = require('./db')
require('dotenv').config()
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)
const menuRoutes = require('./routes/menu-routes')
app.use('/menu', menuRoutes)


app.listen(PORT, () => {
  console.log(`server port ${PORT} pr zinda hai`);
});


