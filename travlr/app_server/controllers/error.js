/* Get error view */
const error = (req, res) => {
    console.log("Error controller function executed!"); //check controller usage
    res.render('error', { title: 'Error' });
};

module.exports ={
    error
};