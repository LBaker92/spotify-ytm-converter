const express = require('express');
const router = express.Router();
const { cookieOptions, spotifyApi } = require('../spotify-api-config');

// Route: /api/authorize/login
router.post('/login', (req, res) => {
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

// Route: /api/authorize/logout
router.get('/logout', (req, res) => {
  res.clearCookie('access_token', cookieOptions);
  res.clearCookie('refresh_token', cookieOptions);

  res.sendStatus(200);
})

module.exports = router;