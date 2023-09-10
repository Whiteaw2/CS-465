const express = require('express');
const router = express.Router();
const controller = require('../controllers/about');

/* Get home page. */
console.log("About function called"); //check route
router.get('/', controller.about);

module.exports = router;