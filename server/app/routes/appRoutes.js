const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(400)
});

// users Router
router.use('/auth', require('./authRoutes'));

module.exports = router;



