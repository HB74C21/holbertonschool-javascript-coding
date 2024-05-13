#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const urlApi = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request.get(urlApi, (err, response, body) => {
  if (err) {
    console.error(err);
    return;
  }
  const movieData = JSON.parse(body);
  const movieTitle = movieData.title;

  console.log(movieTitle);
});
