
// YOUR CODE HERE!
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

function tableTime(data){
    
// Clear existing data
    tbody.html("");
    
// Loop through each result
    data.forEach((dataRow) => {
    let row = tbody.append("tr");
  
    Object.values(dataRow).forEach((value) => {
        let cell = row.append("td");
        cell.text(value);
  });
})
}

// Event Trigger
function filterTime() {
    // Prevent Refresh
    d3.event.preventDefault();
    // Select HTML element
    var date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Apply filter where Date matches the Search
    if (date) {filterData = filterData.filter((row) => row.datetime === date);}
    // Build Table
    tableTime(filterData);}

// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", filterTime);
// Build Table with data.js
tableTime(tableData);
