console.log("in background");

let active_tab_id = 0;
let url = "";

chrome.tabs.onActivated.addListener(tab => {
	//console.log(tab) //prints tab id
	chrome.tabs.get(tab.tabId, current_tab_info => {
		active_tab_id = tab.tabID;
		url = current_tab_info.url;
		//console.log(current_tab_info.url); // print out current tab's url!
		var brand;
		if(url.indexOf(".") !== -1) {
			brand = url.split(".com")[0]
			brand = brand.split("https://")[1]
			brand = brand.split(".").slice(-1)[0]
		}
		//console.log("brand in background is " + brand);
		chrome.storage.local.set({"brand": brand});
	});
});

chrome.tabs.onUpdated.addListener(function
  (tabId, changeInfo, tab) {

	  
	  if (changeInfo.url) {
		//console.log("tab changed to " + changeInfo.url) //prints tab id

		var brand;
		if(changeInfo.url.indexOf(".") !== -1) {
			brand = changeInfo.url.split(".com")[0]
			brand = brand.split("https://")[1]
			brand = brand.split(".").slice(-1)[0]
		}
		//console.log("brand in background is " + brand);
		chrome.storage.local.set({"brand": brand});
		  

    }
  }
);


//once we have url, make sure it's one we have permissions for
//if we have the permissions, inject foreground script


//about chrome.tabs.executescript
//used to make sure foreground scripts actually occur
//first arg: tab to inject script into. null for default, aka current tab
//second arg: file to inject
//third arg: optional, is callback function (what to do afterwards)
//wont work when on chrome settings pages */


chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
	if(request.message == 'need url'){
		//chrome.tabs.sendMessage(active_tab_id, {message: "i got ur message"});
		chrome.storage.local.set({"url": url});
		//console.log("set data to " + url);
		sendResponse({message: "yo I got your message\n"});
		/*chrome.storage.local.get("password", value =>{
			console.log(value);
		});*/
		//get has args: key (what to access from storage) 
		//value: waht to do with it
	}
})
//this is used to commnicate w front end! when something happens there, send a message
//this waits for a message, n when it gets one, does something
//arg: a function. that function's args:
//first arg: message sent
//second arg
//thrid arg how to send a message bacl
