const express = require('express');
const router = express.Router();
const controller = require('../controllers/rooms');

/* Get home page. */
console.log("Rooms function called"); //check route
router.get('/', controller.rooms);

module.exports = router;