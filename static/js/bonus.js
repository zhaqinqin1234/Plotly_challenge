function buildGauge(wfreq) {
    var data = [
        {
          type: "indicator",
          mode: "gauge+number",
          value: wfreq,
          title: { text: "Scrubs per week", font: { size: 24 } },
          text:['0-1', '1-2','2-3','3-4', '4-5', '5-6', '6-7','7-8','8-9'],
          gauge: {
            axis: { range: [null,9], tickwidth: 1, tickcolor: "darkblue" },
            bar: { color: "darkblue" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
                { range: [0, 1], color: "whitesmoke" },
                { range: [1, 2], color: "mintcream" },
                { range: [2, 3], color: "palegreen" },
                { range: [3, 4], color: "mediumseagreen"},
                { range: [4, 5], color: "seagreen" },
                { range: [5, 6], color: "darkgreen"},
                { range: [6, 7], color: "forestgreen"},
                { range: [7, 8], color: "green"},
                { range: [8, 9], color: "darkolivegreen"},
            ],
            
          }
        }
      ];
      
      var layout = {
        width: 450,
        height: 400,
        margin: { t: 25, r: 25, l: 25, b: 25 },
        paper_bgcolor: "lavender",
        font: { color: "darkblue", family: "Arial" }
      };
      var Gauge =document.getElementById("gauge");
      Plotly.newPlot(Gauge, data, layout);


}