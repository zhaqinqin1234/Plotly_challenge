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
        metaData(names[0])
    })




}
function optionChanged(id){
    // console.log(id)
    metaData(id)
}
function metaData(id) {
    console.log(id)
    d3.json("samples.json").then(function(importedData){
        // var names = importedData.names; 
        var demographicData=importedData.metadata
        console.log(demographicData);
        var filtered = demographicData.filter(d=>d.id==id)[0]
        console.log(filtered.id)
        Object.
    })
}

loadDefault()