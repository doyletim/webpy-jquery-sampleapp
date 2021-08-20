google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['KPH', 25]
    //['CPU', 55],
    //['Network', 68]
  ]);

  var options = {
  width: 480, height: 480,
  greenColor: '#5cb85c', greenFrom: 0, greenTo: 29,
  yellowColor: '#f0ad4e', yellowFrom: 40, yellowTo: 49,
  redColor: '#d9534f', redFrom: 50, redTo: 60,
  max: 60,
  minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

  chart.draw(data, options);

  setInterval(function() {
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 13000);
  setInterval(function() {
    data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 5000);
  setInterval(function() {
    data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 26000);
}
