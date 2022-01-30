const router = require('express').Router();
const express = require("express");
const path = require("path");

router.use('/', express.static(path.join(__dirname, 'www')))

router.use('/api', require('./appRoutes'));

router.get('*', function (req, res) {
    res.sendFile(path.join(path.dirname(require.main.filename), 'www', 'index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

module.exports = router;
