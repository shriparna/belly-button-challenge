// Capture the URL which is alread provided
const URL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
console.log(URL);

// Declare a function to build the option from the array
function buildOptions(items) {

    console.log("items");
    console.log(items.length);

    // Locate the dropdown from the index.html
    let dropDown = d3.select("#selDataset");
    let totalItems = parseInt(items.length);
    let options;

    for (let i= 0; i < totalItems; i++) {
        console.log("items[i]");
        console.log(items[i]);
        options = dropDown.append("option");
        options.attr("value", items[i]).text(items[i]);
    }; 
};

d3.json(URL).then(function(bbdata){
    console.log("bbdata");
    console.log(bbdata);

    // Get the names
    bbid = Object.values(bbdata.names);
    console.log("bbid");
    console.log(bbid);

    // Call a function which will populate the options of the dropdown
    buildOptions(bbid);

    // Call a function to display the Demographic Info
    // demographic(bbdata);

    // Call a function to display the plot of top 10 OTUs
    // top10();

    // Call a function to display the bubble plot
    // plotBubble();

    // Call a function to display the gauge plot
    // plotGauge();
});

