const mongoose = require("mongoose");

const db_configuration = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

let url = process.env.COBITHUB_MONGO_URL;

if (process.env.NODE_ENV != "production") {
    url = process.env.COBITHUB_MONGO_TEST_URL;
}

mongoose.connect(url, db_configuration);
mongoose.connection.on("error", () =>
    console.error.bind(console, "error while connecting")
);
mongoose.connection.once("open", () =>
    console.log("database connected successfully !!!")
);

module.exports = mongoose.connection;
