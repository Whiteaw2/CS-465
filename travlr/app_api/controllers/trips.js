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

const tripsAddTrip = async (req, res) => {
    try{ 
        const Trip = await Model.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });
        return res
            .status(201) //created
            .json(Trip);

    } catch (err) {
        return res
            .status(400) //bad request, invalid content
            .json(err);
    }
}

const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);

    Model.findOneAndUpdate({ 'code': req.params.tripCode }, {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    }, { new: true })
    .then(trip => {
        if (!trip) {
            return res
                .status(404)
                .send({
                    message: "Trip not found with code " + req.params.tripCode
                });
        }
        res.send(trip);
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res
                .status(404)
                .send({
                    message: "Trip not found with code " + req.params.tripCode
                });
        }
        return res
            .status(500) // server error
            .json(err);
    });
}

const tripsDeleteTrip = async (req, res) => {
    try {
        console.log("delete try on" + req.params.tripCode);
        const result = await Model.findOneAndDelete({ 'code': req.params.tripCode });
        if (!result) {
            return res.status(404).json({"message": "trip not found"});
        } else {
            return res.status(200).json({"message": "trip deleted successfully"});
        }
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};

