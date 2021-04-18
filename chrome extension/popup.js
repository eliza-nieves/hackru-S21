chrome.runtime.sendMessage({message: 'need url'});

/*
chrome.runtime.onMessage.addListener((req, sender, sendResponse) =>{
	chrome.storage.local.get("url", value =>{
		if(value.url.indexOf(".") !== -1) {
			brand = value.url.split(".com")[0]
			brand = brand.split("https://")[1]
			brand = brand.split(".").slice(-1)[0]
		}
		//console.log("url is " + value.url);
		chrome.storage.local.set({"brand": brand});
		chrome.storage.local.get("brand", value =>{console.log("brand is " + value.brand)});
	});

});*/

console.log("in popup");


//gets current tab's url and brand
var brand = "dummy";


if(typeof jQuery!=='undefined'){
	
	
	$(document).ready(function() {
		
		chrome.storage.local.get("brand", value =>{
			value.brand;
			if(value.brand == "aeropostale"){ value.brand = "Aéropostale"}
			if(value.brand == "hollisterco"){ value.brand = "Hollister"}
			if(value.brand == "nastygal"){ value.brand = "Nasty Gal"}


			$("#name").text(value.brand);
			var apiCall = "https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?q=" + value.brand + "&token=e26c031fb362046e4232370c8cb5ae70";
			
			var data;
			console.log("api call is " + apiCall);
			$.ajax({
				url: apiCall,
				type: "GET",
				success: function (result) {
	
					data = result;

					var info = search(value.brand);

					if(data[0].total){
						$("#row1col1").text(data[0].environment_score);
					} else{
						$("#row1col1").text("No ESG information available");
					}

					$("#row1col2").text(info.enviro_info);

					$("#row2col1").text(info.labor_score);

					$("#row2col2").text(info.labor_info);

					console.log("company name is " + data[0].company_name)

					//$("#hello").text();
	
	
				},
				error: function (error) {
					console.log("no info");
					console.log(error)
				}
			})

		
		
		
		});
		

		
		//change this to communicate w back end to get url





	});
}