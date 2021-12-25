'use strict'
const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'www')))

app.get('/*', function (req, res) {
    res.sendFile(path.join(path.dirname(require.main.filename), 'www', 'index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})


// Server Port
const port = process.env.PORT || 9000;
app.set('port', port);

// Listen for server
app.listen(port, () => {
    console.log(`server starting on localhost:${port}`)
});