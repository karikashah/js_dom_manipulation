// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
    row.append("td").text(value);
  });
});


  
