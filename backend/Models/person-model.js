const mongoose = require('mongoose')
// Schema
const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    age: {
        type: Number,
        required: [true, "Age is Required"],
    },
    role: {
        type: String,
        enum: ['chef', 'manager', 'waiter'],
        required: [true, "Role is Required"]
    },
    mobile: {
        type: Number,
        required: [true, "Mobile Number is Required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true
    },
    address: {
        type: String,
        required: [true, "Address is Required"],
    },
    salary: {
        type: Number,
        required: [true, "Salary is Required"],
    },
    username: {
        type: String,
        required: [true, "username is Required"],
    },
    password: {
        type: String,
        required: [true, "password is Required"],
    }
}, { timestamps: true })
// Model
const person = mongoose.model('persons', PersonSchema);
module.exports = person;
