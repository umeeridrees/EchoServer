const express = require('express');
const router = express.Router();

// echo actionMethod 
router.post('/echo', (req, res, next) => {
    const message = req.body.message;
    var obj = { "message": message };
    
    res.status(200).send(JSON.stringify(obj));
});

module.exports = router;