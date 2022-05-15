const express = require('express');
const router = express.Router();
const { cookieOptions, spotifyApi } = require('../spotify-api-config');

// Route: /api/authorize
router.post('/', (req, res) => {
  const code = req.body.code;

  spotifyApi.authorizationCodeGrant(code)
    .then(response => {
      const accessToken = response.body.access_token;
      const refreshToken = response.body.refresh_token;
      const expiresIn = response.body.expires_in * 1000 // Convert to milliseconds.

      spotifyApi.setAccessToken(accessToken);
      spotifyApi.setRefreshToken(refreshToken);

      res.cookie('access_token', accessToken, {
        ...cookieOptions,
        maxAge: expiresIn
      });

      res.cookie('refresh_token', refreshToken, cookieOptions);

      res.sendStatus(200);
    })
    .catch(error => {
      res.status(error.statusCode)
        .json(error.body);
    })
});

module.exports = router;