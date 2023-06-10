// Capture the URL which is alread provided
const URL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
console.log(URL);

// Declare the variables used across all functions
// Locate the dropdown from the index.html
let dropDown = d3.select("#selDataset");
let options;

// Process the URL to get the data
d3.json(URL).then(function(bbdata){
    console.log("bbdata");
    console.log(bbdata);

    // Call function to populate the dashboard
    dashboard(bbdata);
});

// This function builds the options from the array
function dashboard(bdata) {

    // Get the names
    bbid = Object.values(bdata.names);
    console.log("bbid");
    console.log(bbid);
    
    // Call a function to build the options for dropdown
    buildOptions(bbid);

    // Get the metadata 
    metaData = Object.values(bdata.metadata);
    let choice = dropDown.property("value");
    demographic(metaData, choice);

    // Dynamically change the following based on the drop down selection
    dropDown.on("change", function() {
        let newChoice = dropDown.property("value");
        newChoice = optionChanged(newChoice);
        console.log("choice: " + newChoice);
    
        // Call a function to display the Demographic Info
        demographic(metaData, newChoice);

        // Call a function to display the plot of top 10 OTUs
        // top10();

        // Call a function to display the bubble plot
        // plotBubble();

        // Call a function to display the gauge plot
        // plotGauge();    
    });
};

function buildOptions(items) {

    console.log("items");

    // Convert the total items to Integer
    let totalItems = parseInt(items.length);
    console.log(items.length);

    for (let i= 0; i < totalItems; i++) {
        console.log(items[i]);
        options = dropDown.append("option");
        options.attr("value", items[i]).text(items[i]);
    }; 
};

// This function will be called when the drop down option is changed
function optionChanged(myChoice){
    return myChoice;
}

// This function populates the demographic data
function demographic(mdata, mchoice) {
    console.log("Inside demographic");
    console.log(mdata);
    let metaDetails;

    // Get the length of mdata
    totalMdata = parseInt(mdata.length);
    console.log(totalMdata, mchoice);

    // Locate the metadata from the index.html to display the demographic details

    // Go through the data and grab the details of the id using filter
    dict = mdata.filter(element => element.id==mchoice)[0];
    console.log(dict);

    // Traverse through the dict
    meta = d3.select("#sample-metadata").text("");
    d3.entries(dict).forEach(function(kvpair){
        key = kvpair.key;
        value = kvpair.value;
        meta.append("div").text(`${key}: ${value}`)
        console.log(`${key}: ${value}`)
    });
};
