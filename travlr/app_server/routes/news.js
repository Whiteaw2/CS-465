const express = require('express');
const router = express.Router();
const controller = require('../controllers/news');

/* Get news page. */
console.log("News function called"); //check route
router.get('/', controller.news);

module.exports = router;