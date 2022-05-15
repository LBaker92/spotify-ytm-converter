const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: 'aea5dab0bc0545199c6b2da2804bcb3d',
  clientSecret: '',
  redirectUri: 'http://localhost:3000/auth',
});

const cookieOptions = {
  httpOnly: true,
  sameSite: 'Strict',
  overwrite: true
};

module.exports = {
  cookieOptions,
  spotifyApi
};