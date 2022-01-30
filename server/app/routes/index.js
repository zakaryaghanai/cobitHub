const express = require("express");
const router = express.Router();
const path = require("path");

router.use('/', express.static(path.join(path.dirname(require.main.filename), 'www')))

router.use('/api', require('./appRoutes'));

router.get('*', function (req, res) {
    res.sendFile(path.join(path.dirname(require.main.filename), 'www', 'index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

module.exports = router;
