const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('running ...')
});

// users Router
router.use('/auth', require('./authRoutes'));

module.exports = router;



