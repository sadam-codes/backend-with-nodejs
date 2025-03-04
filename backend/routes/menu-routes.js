const express = require('express');
const router = express.Router();
const menu = require('../Models/menu-model')

// post
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new menu(data)
        const response = await newMenu.save()
        console.log('Data has been saved')
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: "Internal server error", error })
        console.log(error)
    }
})
// get
router.get('/', async (req, res) => {
    try {
        const data = await menu.find();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json("internal server error", error)
    }
})

//update
router.patch('/', async (req, res) => {
    try {
        const data = await menu.updateMany({ name: 'Pepperoni Pizza' }, { $set: { name: 'pizza' } });
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json("internal server error", error)
    }
})
module.exports = router;