const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* Get home page. */
console.log("Travel function called"); //check route
router.get('/', controller.travel);

module.exports = router;