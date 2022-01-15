const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Sets up the routes
app.use(routes);
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/" + process.env.DB_NAME,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

// Use this to log mongo queries being executed!
mongoose.set('debug', true);
app.listen(PORT, () => {
    console.log(`Running at: http://localhost:${PORT}`);
});
