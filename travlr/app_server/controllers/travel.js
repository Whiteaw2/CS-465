var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* Get travel view */
const travel = (req, res) => {
    console.log("Travel controller function executed!"); //check controller usage
    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports ={
    travel
};