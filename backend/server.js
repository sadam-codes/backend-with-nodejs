const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/aboutus", (req, res) => {
  const details = [
    {
      name: "Sadam",
      age: 22,
      dept: "CS",
      section: "A",
    },
  ];
  res.send(details);
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});
app.listen(3000, () => {
  const PORT = 3000;
  console.log(`server port ${PORT} pr zinda hai`);
});
