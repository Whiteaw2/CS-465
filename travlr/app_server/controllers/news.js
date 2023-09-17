
/* Get news view */
const news = (req, res) => {
    console.log("News controller function executed!"); //check controller usage
    res.render('news', { title: 'News' });
};

module.exports ={
    news
};