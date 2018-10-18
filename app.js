const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const productroutes = require('./api/routes/product');
const orderroutes = require('./api/routes/order');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
                "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, PATCH")
        return res.status(200).json({});
    }
});*/

app.use('/product', productroutes);
app.use('/order', orderroutes);

app.use((req, res, next) => {
    const error = new Error('Not Found.');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });

});

module.exports = app;