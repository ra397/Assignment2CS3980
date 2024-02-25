// api url endpoint
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
    const table = document.getElementById("table");

    for (let i = data['data'].length - 1; i >= 0; i --) {
      // get data for each year
      let year = data['data'][i]['Year'];
      let population = data['data'][i]['Population'];
      let formatted_population = population.toLocaleString('en-US');


      // create and insert row for each year
      const newRow = document.createElement('tr');
      const yearCell = document.createElement('td');
      const populationCell = document.createElement('td');

      yearCell.textContent = year;
      populationCell.textContent = formatted_population;

      newRow.appendChild(yearCell);
      newRow.appendChild(populationCell);
      table.appendChild(newRow);
    }    
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('Fetch error:', error);
  });


