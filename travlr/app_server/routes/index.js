const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
console.log("Index function called"); //check route
router.get('/', ctrlMain.index);

module.exports = router;
