const express = require ('express');

const router = express.Router();

const Post = reqire('../model/Post');

app.get('/', (req, res) => {
  res.send('you are on post');
});

router.post('/', (req, res) => {
  console.log('request.body');
});

module.exports = routers;
