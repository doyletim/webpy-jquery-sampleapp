function drawChart() {
    var options = {
        width: 480, height: 480,
        greenColor: '#5cb85c', greenFrom: 0, greenTo: 29,
        yellowColor: '#f0ad4e', yellowFrom: 40, yellowTo: 49,
        redColor: '#d9534f', redFrom: 50, redTo: 60,
        max: 60,
        minorTicks: 5
    };
    $.ajax({
        url: "/gauge",
        dataType: "json"
    }).done(function(data) {
        var arr = [["KPh"]];
        $.each(data.kph, function() {
            var kph = [this.kph];
            arr.push(kph);
        });
        var data = google.visualization.arrayToDataTable(arr);
        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
        chart.draw(data, options);
        //$("h3").append(" Sorted by  "+dimension);
    });
}
google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

