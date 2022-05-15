const express = require('express');
const router = express.Router();
const { cookieOptions, spotifyApi } = require('../spotify-api-config');

// Route: api/refresh
router.post('/', (req, res) => {
  spotifyApi.setRefreshToken(req.cookies.refresh_token);

  spotifyApi.refreshAccessToken()
    .then(response => {
      const accessToken = response.body.access_token;
      const expiresIn = response.body.expires_in * 1000 // Convert to milliseconds.

      res.cookie('access_token', accessToken, {
        ...cookieOptions,
        maxAge: expiresIn
      });

      res.sendStatus(200);
    })
    .catch(error => {
      res.status(error.statusCode)
        .json(error.body);
    });
});

module.exports = router;