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

// get
router.get('/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const allCategories = ['Burger', 'Pizza', 'Drinks', 'Desserts', 'Others']
        if (allCategories.includes(category)) {
            const data = await menu.find({ category: category })
            res.status(200).json(data)
        }
        else {
            res.status(200).json(`Data not found with ${category}`)
        }

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