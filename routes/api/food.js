const express = require('express');
const router = express.Router();
const { getAllFood, addFood, deleteFood, likeFood } = require('../../models/food');

// handle all the routes

router.get('/', getAllFood, (req, res) => {
  res.json(res.food || []);
});


router.post('/', addFood, (req, res) => {
  res.json({ message: '#foodporn has been successfully added!' });
});


router.put('/like/:id', likeFood, (req, res) => {
  res.json({ message: '#foodporn has been liked!' });
});


router.delete('/:id', deleteFood, (req, res) => {
  res.json({ message: 'Successfully Deleted' });
});


module.exports = router;
