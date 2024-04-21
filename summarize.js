// Remove the require statement, as it's not needed in the browser
// const axios = require('axios');

// This is the function where the call to the API is made. Returns the summarized text as a string.
async function summarizeText(text) {
  let data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": 100,
      "min_length": 30
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + process.env['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'] // Note: process.env is not available in browser environments
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    return response.data[0].summary_text;
  } catch (error) {
    console.log(error);
  }
}

// Since we're not using Node.js-style modules, there's no need for module.exports

// Example usage:
// summarizeText("Your text here").then(summary => {
//   console.log(summary);
// });
