const express = require("express");
const db = require('./db')
const app = express();
const person = require('./Models/person-model')
app.use(express.json());

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

// Save Person Data (POST)
app.post("/person", async (req, res) => {
  try {
    const { name, age, role, mobile, email, address, salary } = req.body;

    const newPerson = new person({
      name: name,
      age: age,
      role: role,
      mobile: mobile,
      email: email,
      address: address,
      salary: salary,
    });
    await newPerson.save();
    res.status(201).json({ message: "Data saved successfully", newPerson });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.listen(3000, () => {
  const PORT = 3000;
  console.log(`server port ${PORT} pr zinda hai`);
});
