console.log("in foreground");

/*
const first = document.createElement('button');
first.innerText = "SET DATA! ";
first.id = "first";

const second = document.createElement('button');
second.innerText = "SHOUTOUT TO BACKEND ";
second.id = "second";

document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);

first.addEventListener('click', ()=>{
	chrome.storage.local.set({"password": "123"});
	console.log("pressed button first, set data");
});

second.addEventListener('click', ()=>{
	chrome.runtime.sendMessage({message: 'yo check the storgae'}/*, res => console.log(res)*//*);
	//second attribute is what to do if u get a repsonse
	console.log("sent message");
});
//chrome.storgae.sync is used for different computers

chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
	console.log(request.message)
});
*/