const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');
const jwt = require('express-jwt');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'payload'
});


/* GET home page. */
console.log("Index.js function called"); //check route
router.get('/', ctrlMain.index);

router.get('/testjwt', auth, (req, res) => {
    res.json({ message: "JWT is working!", payload: req.payload });
});

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

//trips route
router.route('/trips')
    .get(tripsController.tripsList)
    .post(auth, (req, res, next) => {
        console.log(req.payload); // Log the payload
        next();
    }, tripsController.tripsAddTrip);

//trip by code route
router.route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip)
    .delete(auth, tripsController.tripsDeleteTrip);


module.exports = router;
