// BONUS: This function plots the gauge
function plotGauge(wfrequency) {
    // Source: https://plotly.com/javascript/gauge-charts/#basic-gauge 
    // Customized closed to the requirements
    var dataGauge = [
        {
          type: "indicator",
          mode: "gauge+number",
          value: wfrequency,
          title: { text: "Belly Button Washing Frequency<br>Scrubs per Week", font: { size: 24 } },
          gauge: {
            axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue" },
            bar: { color: "brown" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
              { range: [0, 3], color: "lightgray" },
              { range: [3, 6], color: "yellow" },
              { range: [6, 9], color: "green" }
            ],
            threshold: {
              line: { color: "red", width: 5 },
              thickness: 1,
              value: wfrequency
            }
          }
        }
      ];
      
      var layoutGauge = {
        width: 500,
        height: 400,
        margin: { t: 25, r: 25, l: 25, b: 25 },
        paper_bgcolor: "white",
        font: { color: "darkblue", family: "Arial" }
      };
      
      // Plot the gauge plot
      Plotly.newPlot('gauge', dataGauge, layoutGauge);
};
