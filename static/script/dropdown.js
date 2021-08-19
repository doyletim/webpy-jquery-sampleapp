$(document).ready(function() {
// this will bind the change event of our countries drop down
$("#countries").change(function() {
//alert($(this).val());
// jquery ajax args must be a JSON string.  So, you can build a string like this:
// (see the next ajax call for a different approach)
    var args = '{"country":"' + $(this).val() + '"}';

    // fetch the JSON object from the main.py getregionsasjson() method
    // and populate the #regions <select> input
    $.ajax({
    type: "POST",
    url: "/getregionsasjson",
    data: args,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(regions) {
        $("#regions").empty();
        $.each(regions, function(index, region) {
            $("#regions").append("<option value='" + region + "'>" + region + "</option>");
        });
    },
    error: function(response) {
        alert(response.responseText);
    }
});


		// if you'd rather take an object approact for args
        args = {}
		args.country = $(this).val();
		
		//IF you build your args as an object, it must be serialized into json before submission...
		jsargs = JSON.stringify(args);

		// fetch plain HTML from main.py getregionsashtml() method
		$.ajax({
			type : "POST",
			async : false,
			url : "/getregionsashtml",
			data : jsargs,
			contentType : "application/json; charset=utf-8",
			dataType : "html",
			success : function(response) {
				$("#regions2").html(response);
			},
			error: function(response) {
				alert(response.responseText);
			}
        });

        // fetch plain HTML from main.py getanythingyouwant() method
        $.ajax({
            type : "POST",
            async : false,
            url : "/getanythingyouwant",
            contentType : "application/json; charset=utf-8",
            dataType : "html",
            success : function(response) {
                $("#coolstuff").html(response);
            },
            error : function(response) {
                alert(response.responseText);
            }
        });
    });
});
