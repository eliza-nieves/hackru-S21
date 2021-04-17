console.log("in popup");

if(typeof jQuery!=='undefined'){
	$(document).ready(function() {
		
		var apiCall = "https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?q=msft&token=e26c031fb362046e4232370c8cb5ae70";
		//change this to communicate w back end to get url

		var data;
		$.ajax({
			url: apiCall,
			type: "GET",
			success: function (result) {

				data = result;
				
				$("#hello").text("company name is: " + data[0].company_name);


			},
			error: function (error) {
				console.log(error)
			}
		})






	});
}