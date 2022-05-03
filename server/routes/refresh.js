const express = require('express');
const router = express.Router();
const spotifyApi = require('../spotify-api-config');

// Route: api/refresh
router.post('/', (req, res) => {
  const refreshToken = req.cookies.refresh_token;

  spotifyApi.setRefreshToken(refreshToken);

  spotifyApi.refreshAccessToken()
  .then(response => {
    res.json({
      accessToken: response.body.access_token
    });
  })
  .catch(err => {
    res.status(400)
    .json(err.body);
  })
});

module.exports = router;