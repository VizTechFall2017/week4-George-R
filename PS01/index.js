var svg = d3.select('svg')
.append('g')
.attr('transform', "translate(100,100)");
var allData;

var scaleX = d3.scaleLinear().domain([0,30]).range([0,600]);
var scaleY = d3.scaleLinear().domain([60,0]).range([0,400]);

var currentYear = "James";

d3.csv('data.csv', function(dataIn){

  allData = dataIn

  var data2016 = dataIn.filter(function(d){
  return d.year =="James";

});

svg.selectAll('circle')
  .data(data2016)
  .enter()
  .append('circle')
  .attr('class', 'myCircles');

svg.append('g')
  .attr('transform', 'translate (0,400)')
  .call(d3.axisBottom(scaleX));

svg.append('g')
  .attr('transform', 'translate (0,0) ')
  .call(d3.axisLeft(scaleY));



updateData(data2016);

});

function updateData(dataPoints) {

  svg.selectAll('.myCircles')
    .data(dataPoints)
    .attr('cx', function(d){
    return scaleX(d.x);


  })
    .attr('cy', function(d){
    return scaleY(d.y);

  })
    .attr('r', function(d){
    return d.r;

  })

};

function buttonClicked(){
  if (currentYear == "James") {
    var data2017 = allData.filter(function(d){
     return d.year == "Curry";
});


console.log(data2017)
currentYear = "Curry";
updateData(data2017);

}
else {

data2016 = allData.filter(function(d){
  return d.year == "James";
});
console.log(data2016)
currentYear = "James";
updateData(data2016);
}


}
window.setInterval(function(){
  buttonClicked()
}, 3000)
