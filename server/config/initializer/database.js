const mongoose = require('mongoose');
const fs = require("fs");

const db_configuration = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

let url = process.env.COBITHUB_MONGO_URL;

if(fs.existsSync('.env')) {
  url = process.env.COBITHUB_MONGO_TEST_URL;
}

mongoose.connect(url, db_configuration);
mongoose.connection.on('error', () => console.error.bind(console, 'Erreur lors de la connexion'));
mongoose.connection.once('open', () => console.log("database connected successfully !!!"));

module.exports = mongoose.connection;