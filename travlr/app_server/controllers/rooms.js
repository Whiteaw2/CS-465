var fs = require('fs');
var roomsJSON = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* Get rooms view */
const rooms = (req, res) => {
    console.log("Rooms controller function executed!"); //check controller usage
    res.render('rooms', { title: 'rooms', roomsJSON});
};

module.exports ={
    rooms
};