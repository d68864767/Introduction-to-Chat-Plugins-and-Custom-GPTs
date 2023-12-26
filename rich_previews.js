// Import necessary libraries
const express = require('express');
const axios = require('axios');
const ogs = require('open-graph-scraper');

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Rich previews endpoint
app.post('/rich-previews', async (req, res) => {
  try {
    // Extract the URL from the request body
    const { url } = req.body;

    // Fetch the manifest file
    const manifest = require('./manifest.json');

    // Fetch the OpenAPI specification
    const openapiSpec = require('./openapi_spec.json');

    // Determine the appropriate endpoint based on the URL
    let endpoint;
    if (url.includes('endpoint1')) {
      endpoint = openapiSpec.paths['/endpoint1'].get.summary;
    } else if (url.includes('endpoint2')) {
      endpoint = openapiSpec.paths['/endpoint2'].get.summary;
    } else {
      throw new Error('Invalid URL');
    }

    // Make an API call to the determined endpoint
    const response = await axios.get(`https://api.yourdomain.com/v1/${endpoint}`);

    // Check if the response is successful
    if (response.status !== 200) {
      throw new Error('Failed to make the API call');
    }

    // Use Open Graph Scraper to generate rich previews
    const options = { url: response.data };
    ogs(options, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('An error occurred during the rich previews generation');
      } else {
        // Send the rich preview back to the user
        res.json(results);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the rich previews generation');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
