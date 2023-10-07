const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const tripsController = require('../controllers/trips');


/* GET home page. */
console.log("Index function called"); //check route
router.get('/', ctrlMain.index);

router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

module.exports = router;
