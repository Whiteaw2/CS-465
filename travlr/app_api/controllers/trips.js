const mongoose = require('mongoose');
const Model = mongoose.model('trips');

//Get: trips - lists all the trips
const tripsList = async (req, res) => {
    try {
        const trips = await Model.find({}); 
        if (!trips || trips.length === 0) {
            return res.status(404).json({"message": "trips not found"});
        } else {
            return res.status(200).json(trips);
        }
    } catch (err) {
        return res.status(404).json(err);
    }
};

// Get: /trips/:tripCode - returns a single trip
const tripsFindByCode = async (req, res) => {
    try {
        console.log("Inside tripsFindByCode function");
        console.log("Trip code:", req.params.tripCode);
        const trip = await Model.findOne({'code': req.params.tripCode });
        if (!trip || trip.length === 0) {
            return res.status(404).json({"message": "trip not found"});
        } else {
            return res.status(200).json(trip);
        }
    } catch (err) {
        return res.status(404).json(err);
    }
};


module.exports = {
    tripsList,
    tripsFindByCode
};

