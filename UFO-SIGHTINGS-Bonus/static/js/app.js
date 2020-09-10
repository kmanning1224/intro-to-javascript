// from data.js
var tableData = data;

// YOUR CODE HERE!

//get table
var table = d3.select("tbody");
tableData.forEach(function(sighting){
    console.log(sighting);
});

tableData.forEach(function(sighting){
    var row = table.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

//Button bois
var button = d3.select('#filter-btn')

var form = d3.select('#form-group')

//Event Handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//Even handler functions
function runEnter() {
    
    table.html("");

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filterData = tableData.filter(tableData => tableData.datetime === inputValue ||
        tableData.state === inputValue ||
        tableData.city === inputValue ||
        tableData.country === inputValue ||
        tableData.shape === inputValue);

    console.log(filterData);


    filterData.forEach(function(filteredsearch){
        var row = table.append("tr");
        Object.entries(filteredsearch).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
    });


});
};


