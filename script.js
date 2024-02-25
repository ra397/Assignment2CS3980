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
    // Do something with the data returned by the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('Fetch error:', error);
  });



// display the data
// Create an HTML table element
// Create an HTML table element
const table = document.createElement('table');
table.setAttribute('border', '1');

// Create table header row
const headerRow = table.createTHead().insertRow();
const headerCell1 = headerRow.insertCell();
headerCell1.textContent = 'Nation';
const headerCell2 = headerRow.insertCell();
headerCell2.textContent = 'Year';
const headerCell3 = headerRow.insertCell();
headerCell3.textContent = 'Population';

// Create data rows from the data
for (const row of data) {
  const dataRow = table.insertRow();
  const dataCell1 = dataRow.insertCell();
  dataCell1.textContent = row.Nation;
  const dataCell2 = dataRow.insertCell();
  dataCell2.textContent = row.Year;
  const dataCell3 = dataRow.insertCell();
  dataCell3.textContent = row.Population;
}

// Display the table
document.body.appendChild(table);