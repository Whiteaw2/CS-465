const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact');

/* Get home page. */
console.log("Contact function called"); //check route
router.get('/', controller.contact);

module.exports = router;