/* Get meals view */
const meals = (req, res) => {
    console.log("Meals controller function executed!"); //check controller usage
    res.render('meals', { title: 'Meals' });
};

module.exports ={
    meals
};