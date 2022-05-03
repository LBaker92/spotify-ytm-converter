const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: 'aff39ac9de5440a4bed8b34bc45ce4f1',
  clientSecret: '',
  redirectUri: 'http://localhost:3000/auth',
});

module.exports = spotifyApi;