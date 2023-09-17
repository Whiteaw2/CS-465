const express = require('express');
const router = express.Router();
const controller = require('../controllers/error');

/* Get home page. */
console.log("error function called"); //check route
router.get('/', controller.error);

module.exports = router;