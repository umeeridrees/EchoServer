const express = require('express');
const router = express.Router();

router.post('/hello', (req, res, next) => {
    const message = req.body.message;

    res.status(200).json({
        message: message
    });
});

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "This is GET to products."
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: "This is POST to products.",
        product: product
    });
});

router.post('/:productId', (req, res, next) => {
    if(id = 'special')
    {
        const id = req.params.productId;
        res.status(200).json({
            message: "You discovered.",
            id: id
        });
    }
    else
    {
        res.status(200).json({
            message: "You passed Id.",
        });
    }
    
    res.status(200).json({
        message: "This is POST to products."
    });
});

router.put('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "This is PUT to products."
    });
});


router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "This is DELETE to products."
    });
});


module.exports = router;