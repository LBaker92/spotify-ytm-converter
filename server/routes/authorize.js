const express = require('express');
const router = express.Router();
const spotifyApi = require('../spotify-api-config');

// Route: /api/authorize
router.post('/', (req, res) => {
  const code = req.body.code;

  spotifyApi.authorizationCodeGrant(code)
    .then(response => {
      const cookieOptions = {
        httpOnly: true,
        sameSite: 'Strict'
      };

      res.cookie('refresh_token', response.body.refresh_token, cookieOptions);

      res.json({
        accessToken: response.body.access_token,
        expiresIn: response.body.expires_in
      });
    })
    .catch(err => {
      res.status(400)
        .json(err.body);
    });
});

module.exports = router;