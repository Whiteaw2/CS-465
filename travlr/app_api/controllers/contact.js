/* Get contact view */
const contact = (req, res) => {
    console.log("contact controller function executed!"); //check controller usage
    res.render('contact', { title: 'Contact' });
};

module.exports ={
    contact
};