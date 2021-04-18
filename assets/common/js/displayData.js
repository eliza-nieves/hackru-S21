
var title = document.getElementById("brand_title")
title.innerHTML = (location.href.split("brand=")[1])
title.style.textTransform = "capitalize";

// var esgTable = document.getElementById("esg_table")
// var row = esgTable.lastChild
// esgTable.lastChild.display = "none"