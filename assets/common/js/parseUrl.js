
var submitWebsiteButton = document.getElementById("submit")

submitWebsiteButton.addEventListener("click", function() {
  website = document.getElementById("website_textbox").value
  if(website==="") return
  if(website.indexOf(".com") !== -1) {
    website = website.split(".com")[0]
    website = website.split(".").slice(-1)[0]
  }
    
      
  window.open("assets/common/html/brandinfo.html?brand="+website+"&score="+score,"_self")
})


// submitWebsiteButton.href = "https://www.google.com"