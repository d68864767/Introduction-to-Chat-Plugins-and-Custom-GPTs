// Import necessary libraries
const express = require('express');
const markdown = require('markdown').markdown;

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Markdown formatting endpoint
app.post('/markdown-formatting', async (req, res) => {
  try {
    // Extract the API response from the request body
    const { apiResponse } = req.body;

    // Convert the API response to markdown
    const markdownResponse = markdown.toHTML(apiResponse);

    // Send the markdown formatted response
    res.json({ markdownResponse });
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ error: 'An error occurred while formatting the API response to markdown.' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
