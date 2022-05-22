const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


// Start listening

app.listen(3000, () => {
   console.log('Server listening on 3000');
})

// Establishing mongoDB connection


mongoose.connect(process.env.DB_CONNECTION, () => {
   console.log('Connected to Mongo DB');
})

// Importing routs

const postsRoutes = require ('./routes/posts');
app.use('/posts', postsRoutes);

// Starting body parser

app.use(bodyParser.json());
