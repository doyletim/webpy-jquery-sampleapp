$('#a1').click(function() {
    $.ajax({
        url: '/gauge',
        type: 'GET'
    })
    .done(function(data) {alert("Gzgz")})
    .fail(function(xhr, errorType, exception) {
        var errorMessage = exception || xhr.statusText;
        alert("Excep:: "+exception +"Status:: "+xhr.statusText);
    })
})
