const table = document.querySelector('#table');
const tableHeaderRow = document.querySelector('#tableHeaderRow');

var json = '[{"first_name": "John", "last_name": "Doe", "age": 23, "Description ": "John Doe is a good singer"},{"first_name": "Steve", "last_name": "Tailor", "age": 27, "Description ": "Steve Tailor is a cameraman"},{"first_name": "Mark", "last_name": "Doe", "age": 21, "Description ": "Mark Doe is a nice artist"},{"first_name": "Philip", "last_name": "Bloom", "age": 43, "Description ": "Philip Bloom is a Famous Cinematographers"}]';
var newIndex = '{"first_name": "Kelly", "last_name": "Mode", "age": 33, "Description ": "kelly Mode is a brilliant teacher "}';

// Set up the table headers with the object keys.
// Since all keys are the same in all objects, taking the first object will do.
function makeHeaders(newJson) {
    const headers = Object.keys(newJson[0]);
    headers.forEach(header => {
        thNode = document.createElement('th');
        thNode.innerHTML = header;
        tableHeaderRow.appendChild(thNode);
    });
}

// Create and append the table rows for the body.
function appendTableRows(newJson) {
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
}

// Insert new object into the second index and display it onto the table.
addButton.addEventListener('click', () => {
    
    // Use temp to store the new data.
    let temp = [];
    json = JSON.parse(json);
    for(let i=0; i<json.length; i++) {
        // Check if it is at the second index, if true, push the new data first.
        if(i === 1) temp.push(JSON.parse(newIndex));
        temp.push(json[i]);
    }

    // Convert the new data back into a valid json object.
    temp = JSON.parse(JSON.stringify(temp));
    makeHeaders(temp);
    appendTableRows(temp);
})