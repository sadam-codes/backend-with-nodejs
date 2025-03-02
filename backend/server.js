const express = require("express");
const db = require('./db')
const app = express();
app.use(express.json());

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

app.listen(3000, () => {
  const PORT = 3000;
  console.log(`server port ${PORT} pr zinda hai`);
});


