/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways' });
};
const trips = (req, res) => {
    // logic for handling the /api/trips endpoint
    res.send("Trips data");
};

module.exports = {
    index,
    trips
};