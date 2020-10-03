function loadDefault() {
    d3.json("samples.json").then(function(importedData){

        var names = importedData.names;
        var demographicData = importedData.metadata;
        // console.log(names);
        // console.log(demographicData);
        var dropdown = d3.select("#selDataset");
        names.forEach(sample => {
            // console.log(sample);
            dropdown.append("option").text(sample)
            
        })
        metaData(names[0]);
        buildCharts(names[0])
    })




}
function optionChanged(id){
    // console.log(id)
    metaData(id)
    buildCharts(id)
}
function metaData(id) {
    console.log(id)
    d3.json("samples.json").then(function(importedData){
        // var names = importedData.names; 
        var demographicData=importedData.metadata
        console.log(demographicData);
        //filter the data for the object with the desired sample number
        var filtered = demographicData.filter(d=>d.id==id)[0]
        console.log(filtered.id)
        var panel =d3.select("#sample-metadata");
        //clear any existing metadata
        panel.html("");
        Object.entries(filtered).forEach(([key, value])=> {
            panel.append("h6").text(`${key.toUpperCase()}: ${value}`);

        });
    
    })
}
function buildCharts(sample) {
    d3.json("samples.json").then(function(impoortedData){
        var samples=impoortedData.samples;
        var result =samples.filter(sampleObj => sampleObj.id ==sample)[0];
        var otu_ids=result.otu_ids;
        var otu_labels=result.otu_labels;
        var sample_values=result.sample_values;
//build a bubble chart
        var bubbleChartLayout ={
            title: "Bacteria Culture Per Sample",
            margin: {t:0},
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
            margin: {t:30}
        };
        var bubbleChartData = [{
            x: otu_ids,
            y: sample_values,
            mode: "markers",
            text: otu_labels,
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        }];

        Plotly.newPlot("bubble", bubbleChartData, bubbleChartLayout);

        var yticks = otu_ids.slice(0,10).map(otuID=>`OTU ${otuID}`).reverse();
        var barData =[{
            y: yticks,
            x: sample_values.slice(0,10).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h",
        }];
        var barLayout ={
            title: "Top 10 Bacteria",
            margin: {t:30, l: 150}
        };
        Plotly.newPlot("bar", barData, barLayout);

    });

}

loadDefault()