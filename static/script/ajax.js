$('#a1').click(function() {
    $.ajax({
        url: '/gauge',
        type: 'GET'
    })
    .done(function(data) {alert("Gzgz")})
    .fail(function(xhr, status, error) {
        var errorMessage = xhr.status + ': ' + xhr.statusText
        alert('Error - ' + errorMessage);})})
