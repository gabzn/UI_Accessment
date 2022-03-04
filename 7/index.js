var json = '[{"first_name": "John", "last_name": "Doe", "age": 23, "Description ": "John Doe is a good singer"},{"first_name": "Steve", "last_name": "Tailor", "age": 27, "Description ": "Steve Tailor is a cameraman"},{"first_name": "Mark", "last_name": "Doe", "age": 21, "Description ": "Mark Doe is a nice artist"},{"first_name": "Philip", "last_name": "Bloom", "age": 43, "Description ": "Philip Bloom is a Famous Cinematographers"}]';
const newJson = JSON.parse(json);

const table = document.querySelector('#table');
const tableHeaderRow = document.querySelector('#tableHeaderRow');

// Set up the table headers with the object keys.
// Since all keys are the same in all objects, taking the first object will do.
const headers = Object.keys(newJson[0]);
headers.forEach(header => {
    thNode = document.createElement('th');
    thNode.innerHTML = header;
    tableHeaderRow.appendChild(thNode);
});

// Create and append the table rows for the body.
newJson.forEach(obj => {
    const tableRow = document.createElement('tr');

    // Create the data for this row.
    for(const property in obj) {
        const tableData = document.createElement('td');
        tableData.innerHTML = obj[property];
        tableRow.appendChild(tableData);
    }

    // Append this table row to the table.
    table.appendChild(tableRow);
})