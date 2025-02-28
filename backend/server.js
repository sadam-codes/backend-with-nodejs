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
  // 1st approach

  // try {
  //   const { name, age, role, mobile, email, address, salary } = req.body;

  //   const newPerson = new person({
  //     name: name,
  //     age: age,
  //     role: role,
  //     mobile: mobile,
  //     email: email,
  //     address: address,
  //     salary: salary,
  //   });
  //   await newPerson.save();
  //   res.status(201).json({ message: "Data saved successfully", newPerson });

  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }

  // 2nd approach
  try {
    const data = req.body;
    const newPerson = new person(data)
    const response = await newPerson.save()
    console.log('data saved')
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })
  }
});

// get data
app.get("/persons", async (req, res) => {
  try {
    const data = await person.find({ age: { $lte: 33 } }, { name: 1, _id: 0 });
    res.status(200).json(data)
  } catch (error) {
    console.error("Error fetching names:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  const PORT = 3000;
  console.log(`server port ${PORT} pr zinda hai`);
});
