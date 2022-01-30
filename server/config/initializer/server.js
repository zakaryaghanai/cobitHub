const app = require('../../app');

// Get port from environment and store in Express
const port = process.env.PORT || 9000;

app.set('port', port);
app.listen(port,  ()  => console.log(`server starting on localhost:${port}`));