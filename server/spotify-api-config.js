const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: 'd356f935b2054dd99f85b27fbde83ad0',
  clientSecret: '',
  redirectUri: 'http://localhost:3000/auth',
});

module.exports = spotifyApi;