//const fs = require('fs');
//const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
const apiOptions = {
    server: 'http://localhost:3000'
};


/* internal method to render travel list*/ 
const renderTravelList = (req, res, responseBody ) => {
    let message = null;
    let pageTitle = process.emitWarning.npm_package_description + ' - Travel';
    if (!(responseBody instanceof Array)){
        message  = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length){
            message = 'No trips exist in database!'
        }
    }
    res.render('travel',
        {
            title: pageTitle,
            trips: responseBody,
            message
        }
    );
}

/* Get travel list view */
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: '${apiOptions.server}${path}',
        method: 'GET',
        json:{},
    };
    console.info('>> travelController.travelList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    );
};

/* Get travel view */
const travel = (req, res) => {
    console.log("Travel controller function executed!"); //check controller usage
    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports ={
    travel
};