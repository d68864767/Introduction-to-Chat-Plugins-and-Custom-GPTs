// Import necessary libraries
const express = require('express');
const oauthServer = require('oauth2-server');
const Request = oauthServer.Request;
const Response = oauthServer.Response;

// Create an Express application
const app = express();

// Create an OAuth server
const authServer = new oauthServer({
  model: require('./oauth_model'), // This is your model file where you define your database schema for tokens, users, clients, etc.
});

// User Activation endpoint
app.post('/activate', (req, res) => {
  const request = new Request(req);
  const response = new Response(res);

  // Check if the user has already activated the plugin
  authServer
    .getUser(request, response)
    .then((user) => {
      if (user.pluginActivated) {
        res.status(400).json({ error: 'Plugin already activated.' });
      } else {
        // Activate the plugin for the user
        user.pluginActivated = true;
        user.save()
          .then(() => {
            res.json({ message: 'Plugin activated successfully.' });
          })
          .catch((err) => {
            // Handle error
            res.status(500).json(err);
          });
      }
    })
    .catch((err) => {
      // Handle error
      res.status(500).json(err);
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
