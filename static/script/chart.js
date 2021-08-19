google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var json = $.ajax({
        url: "/gauge",
        dataType:"json",
        async: false
    }).responseText;

    var data = new google.visualization.DataTable(json);

    var options = {
        width: 400, height: 120,
        redFrom: 90, redTo: 100, redColor: '#d9534f',
        yellowFrom: 75, yellowTo: 90, yellowColor: '#f0ad4e',
        greenFrom: 0, greenTo: 70, greenColor: '#5cb85c',
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

    chart.draw(data, options);

    setInterval(function() {
        data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
        chart.draw(data, options);
    }, 10000);
}
