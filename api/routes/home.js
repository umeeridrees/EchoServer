const express = require('express');
const router = express.Router();

router.post('/hello', (req, res, next) => {
    const message = req.body.message;
    res.status(200).send(message);
});

module.exports = router;