const express = require('express');
const router = express.Router();
const { spotifyApi } = require('../spotify-api-config');

router.get('/tracks', (req, res) => {
  spotifyApi.setAccessToken(req.cookies.access_token);

  spotifyApi.getMySavedTracks()
    .then(response => {
      const songs = response.body.items
        .map((item) => {
          return {
            title: item.track.name,
            artist: item.track.artists[0].name
          }
        });

      res.status(200)
        .json(songs);
    })
    .catch(error => {
      res.status(error.statusCode)
        .json(error.body);
    });
});

module.exports = router;