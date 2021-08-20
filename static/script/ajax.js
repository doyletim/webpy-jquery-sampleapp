$('#a1').click(function() {
    $.ajax({
        url: '/gauge',
        type: 'GET',
        success: function(result) { //we got the response
            alert('Successfully called');
        },
        error: function(req, err){ alert('Broken ' + err); }

    })
})
