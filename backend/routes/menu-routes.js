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
        const data = await menu.find().countDocuments();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message })
    }
})

// parametrized API
router.get('/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const allCategories = ['Burger', 'Pizza', 'Drinks', 'Desserts', 'Others']
        if (!allCategories.includes(category)) {
            return res.status(404).json({ message: `No menu items found for category: ${category}` });
        }
        const data = await menu.find({ category })
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message })
    }
})
//update
router.patch('/', async (req, res) => {
    try {
        const data = await menu.updateMany({ name: 'Pepperoni Pizza' }, { $set: { name: 'pizza' } });
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message })
    }
})

//delete
router.delete('/', async (req, res) => {
    try {
        const { _id } = req.body;
        const data = await menu.deleteMany({ _id });
        if (data.deletedCount === 0) {
            return res.status(404).json({ message: "No matching menu items found to delete" });
        }
        res.status(200).json({ message: "Menu items deleted successfully", data });
        if (!_id) {
            return res.status(400).json({ error: "Menu item id is required for deletion" });
        }

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});
module.exports = router;