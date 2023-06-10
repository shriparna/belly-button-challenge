// BONUS: This function plots the gauge
function plotGauge(bbsample) {
    // Locate the bar graph elemement from the index.html
    currentSample = bbsample[0];
    console.log("currentSample");
    console.log(currentSample);

    let otuIds = Object.values(currentSample.otu_ids);
    let sampleValues =  Object.values(currentSample.sample_values);
    let otuLabels =  Object.values(currentSample.otu_labels);

    let top10OtuIds = otuIds.slice(0,10).map(id => "OTU " + id).reverse();
    let top10SampleValues = sampleValues.slice(0, 10).reverse();
    let top10OtuLables = otuLabels.slice(0, 10).reverse().map(item => item.replace(/;/g, '<br>'));
    console.log("top10OtuIds");
    console.log(top10OtuIds);
    console.log(top10OtuLables);

    trace = {
        x: top10SampleValues,
        y: top10OtuIds,
        text: top10OtuLables,
        type: 'bar',
        orientation: 'h',
        hovertemplate: '%{text}<extra></extra>' //<extra> tag is used to remove trace0. Source: plotly.com
    }

    data = [trace];

    Plotly.newPlot("gauge", data);

};
