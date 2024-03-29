const express = require("express");
require("dotenv").config();
const path = require("path");

const bodyParser = require('body-parser');

const connectToMongoDB = require("./config/database");

const urlRouter = require("./routes/url");

const app = express();

connectToMongoDB();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.redirect('url/index');
});

app.use("/url", urlRouter);



const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
