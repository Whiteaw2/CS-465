/* Get rooms view */
const rooms = (req, res) => {
    console.log("Rooms controller function executed!"); //check controller usage
    res.render('rooms', { title: 'rooms'});
};

module.exports ={
    rooms
};