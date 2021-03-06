const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


// Starting body parser

app.use(bodyParser.json());
app.use(cors());

// Start listening

app.listen(process.env.PORT || 3000, () => {
   console.log('Server listening on %s port', process.env.PORT);
})

// Establishing mongoDB connection

mongoose.connect(process.env.DB_CONNECTION, () => {
   console.log('Connected to Mongo DB');
})

// Importing routs

const postsRoutes = require ('./routes/posts');
app.use('/posts', postsRoutes);

const bikesRoutes = require ('./routes/bikes');
app.use('/bikes', bikesRoutes);

// Routes

app.get ('/', (req, res) => {
   res.send('We are in Home');
});

// Exporting app

module.exports = app;
