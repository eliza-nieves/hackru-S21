if(typeof jQuery!=='undefined'){
	$(document).ready(function() {
		
		var apiCall = "https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?q=msft&token=e26c031fb362046e4232370c8cb5ae70";
		//change this to communicate w back end to get url

		var data;

		var requestOptions = {
		method: 'GET',
		mode: 'no-cors'
		};
		fetch('https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?q=msft&token=e26c031fb362046e4232370c8cb5ae70', requestOptions)
			.then(response => response.text())	
			.then(data => console.log("data is + " + data + "!"))
			.catch(error => console.error(error));



	});
}
