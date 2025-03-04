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
        enum: ['chef', 'manager', 'waiter'], // Job role should be here
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
    }
}, { timestamps: true })
// Model
const person = mongoose.model('persons', PersonSchema);
module.exports = person;
