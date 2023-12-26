// Import necessary libraries
const axios = require('axios');

// Define the example functions
const example1 = async () => {
  try {
    // Make a GET request to the first endpoint
    const response = await axios.get('https://api.yourdomain.com/v1/endpoint1');

    // Check if the response is successful
    if (response.status !== 200) {
      throw new Error('Failed to fetch data from endpoint 1');
    }

    // Log the response data
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const example2 = async () => {
  try {
    // Make a GET request to the second endpoint
    const response = await axios.get('https://api.yourdomain.com/v1/endpoint2');

    // Check if the response is successful
    if (response.status !== 200) {
      throw new Error('Failed to fetch data from endpoint 2');
    }

    // Log the response data
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Export the example functions
module.exports = {
  example1,
  example2
};
