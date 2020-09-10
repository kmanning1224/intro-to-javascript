# UFO Sightings Javascript Homework

This assignment focussed on making a working filter search/button with javascript.

#### Main table displayed on site open
![table](https://i.gyazo.com/afa8bb8312c08350b7b8dd8e782e5edb.png)
#### Table with filtered date search
![filtered](https://i.gyazo.com/0124ef8a181a508bc114b7e574f6d112.png)

## Code for Part 1

```
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
form.on("submit",runEnter);

//Even handler functions
function runEnter() {
    
    table.html("");

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filterData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filterData);


    filterData.forEach(function(filteredsearch){
        var row = table.append("tr");
        Object.entries(filteredsearch).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
    });


});
};



```
#### Filtered results for bonus
![filteredb](https://i.gyazo.com/26a7a89a79e5b97cfd424ba80ea8d8b1.png)
## Code for Bonus
```

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
form.on("submit",runEnter);

//Even handler functions
function runEnter() {
    
    table.html("");

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
```
### Bonus change to input options
```
    var filterData = tableData.filter(tableData => tableData.datetime === inputValue ||
        tableData.state === inputValue ||
        tableData.city === inputValue ||
        tableData.country === inputValue ||
        tableData.shape === inputValue);
```
```
    console.log(filterData);


    filterData.forEach(function(filteredsearch){
        var row = table.append("tr");
        Object.entries(filteredsearch).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
    });


});
};
```

