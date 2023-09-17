/* Get about view */
const about = (req, res) => {
    console.log("About controller function executed!"); //check controller usage
    res.render('about', { title: 'About' });
};

module.exports ={
    about
};