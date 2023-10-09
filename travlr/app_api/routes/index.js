const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const tripsController = require('../controllers/trips');


/* GET home page. */
console.log("Index function called"); //check route
router.get('/', ctrlMain.index);

//trips route
router.route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

//trip by code route
router.route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip)
    .delete(tripsController.tripsDeleteTrip);


module.exports = router;
