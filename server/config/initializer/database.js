const mongoose = require('mongoose');

const db_configuration = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

mongoose.connect(process.env.COBITHUB_MONGO_URL, db_configuration);
mongoose.connection.on('error', () => console.error.bind(console, 'Erreur lors de la connexion'));
mongoose.connection.once('open', () => console.log("database connected successfully !!!"));

module.exports = mongoose.connection;