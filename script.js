// Define the URL of the API endpoint you want to call
const apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

// Make a GET request to the API endpoint using fetch
fetch(apiUrl)
  .then(response => {
    // Check if the response status is in the 200 range
    if (response.ok) {
      // If the response is successful, parse the JSON data
      return response.json();
    }
    // If the response is not successful, throw an error
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('Fetch error:', error);
  });


