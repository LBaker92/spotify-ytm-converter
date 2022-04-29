const express = require('express');
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node');

// Route: api/refresh
router.post('/', (req, res) => {
  const refreshToken = req.body.refreshToken;

  const spotifyApi = new SpotifyWebApi({
    clientId: 'aff39ac9de5440a4bed8b34bc45ce4f1',
    clientSecret: '5b28fb3e07744b49af3fb8f8f20e98fe',
    redirectUri: 'http://localhost:3000',
    refreshToken
  });

  spotifyApi.refreshAccessToken()
  .then(response => {
    res.json({
      accessToken: response.body.access_token,
      expiresIn: response.body.expires_in
    });
  })
  .catch(err => {
    res.status(400)
    .json(err.body);
  })
});

module.exports = router;