// Import necessary dependencies
const express = require('express');
const pluginModelSelection = require('./plugin_model_selection.js');
const authenticationSetup = require('./authentication_setup.js');

// Create an Express application
const app = express();

// Define the start building function
const startBuilding = async () => {
  try {
    // Select the plugin model
    const pluginModel = await pluginModelSelection();

    // Setup authentication
    await authenticationSetup();

    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });

    console.log('Plugin building started successfully');
  } catch (error) {
    console.error('Failed to start building the plugin', error);
  }
};

// Start building the plugin
startBuilding();

// Export the start building function
module.exports = startBuilding;
