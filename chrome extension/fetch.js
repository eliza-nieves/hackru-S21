function fetch(brand){
	
if(typeof jQuery!=='undefined'){
	
	$(document).ready(function() {
		

		
		var apiCall = "https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?q=" + brand + "&token=e26c031fb362046e4232370c8cb5ae70";
		//change this to communicate w back end to get url


		var data;
		$.ajax({
			url: apiCall,
			type: "GET",
			success: function (result) {

				data = result;
				
				return data;
				//$("#name").text(result[0].company_name);


			},
			error: function (error) {
				console.log("no info");
				console.log(error)
			}
		})


		//$("#hello").text();



	});

	else{
		var obj = {
		failure:  yea,
		
	};
	// Return it
	return obj;
	}
}

}
