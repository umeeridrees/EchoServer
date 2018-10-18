const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "This is GET to orders."
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "This is POST to orders."
    });
});

router.post('/:orderId', (req, res, next) => {
    if(id = 'special')
    {
        const id = req.params.productId;
        res.status(200).json({
            message: "You discovered special order.",
            id: id
        });
    }
    else
    {
        res.status(200).json({
            message: "You passed Id to order.",
        });
    }
    
    res.status(200).json({
        message: "This is POST to order."
    });
});

router.put('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "This is PUT to order."
    });
});


router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "This is DELETE to order."
    });
});


module.exports = router;