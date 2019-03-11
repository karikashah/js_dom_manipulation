var tableData = data; // from data.js
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn"); // Select the submit button

// for the first time page loads, populate all the content of the data (the UFO sightings)
populateTable(tableData);

// Actual function to display the UFO sightings data in the table
function populateTable(ufoData) {
  ufoData.forEach(function(ufoSighting) {
    // console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      // console.log(key, value);
      row.append("td").text(value);
    });
  });
}

// When submit event is triggered
submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log("Input Value", inputValue);
  var filteredData = tableData.filter(dt => dt.datetime === inputValue);
  console.log("Filter data", filteredData);
  tbody.selectAll("tr").remove();

  // populate the table with the filtered data
  if(filteredData.length != 0)
  {
    d3.select("#error").text("");
    populateTable(filteredData);
  }
  else
  {
    console.log("No data to filter.");
    d3.select("#error").text("No search results obtained");
  }
});


  
