const express = require('express');
const router = express.Router();
const controller = require('../controllers/meals');

/* Get home page. */
console.log("Meals function called"); //check route
router.get('/', controller.meals);

module.exports = router;