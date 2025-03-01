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
    const data = await person.find({ name: "Sadam Muneer" });
    // Check if data array is empty
    if (data.length === 0) {
      return res.status(404).json({ error: "No persons found" });
    }
    res.status(200).json(data)
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// parametrized API
app.get("/persons/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    const validRoles = ['chef', 'manager', 'waiter']
    if (validRoles.includes(workType)) {
      const response = await person.find({ role: workType })
      if (response.length === 0) {
        return res.status(404).json({ error: `No persons found for the role ${workType}` });
      }
      res.status(200).json(response)
    }
    else {
      return res.status(404).json({ error: "Invalid work type" });
    }

  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
})
// update data
app.patch("/persons", async (req, res) => {
  try {
    const data = await person.updateMany({ name: "Sadam" }, { $set: { name: "Sadam Muneer" } });
    res.status(200).json(data)
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// delete data
app.delete("/persons", async (req, res) => {
  try {
    const data = await person.deleteMany({ name: "John Doe" });
    res.status(200).json(data)
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(3000, () => {
  const PORT = 3000;
  console.log(`server port ${PORT} pr zinda hai`);
});
