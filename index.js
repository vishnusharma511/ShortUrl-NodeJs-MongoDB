const express = require('express');
require("dotenv").config();

const connectToMongoDB = require('./config/database');


const urlRouter = require('./routes/url');

const app = express();

connectToMongoDB();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        message: 'hello vis'
    });
});

app.use('/url', urlRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));
