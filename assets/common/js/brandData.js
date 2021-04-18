
str = window.location.href;
var res = str.split("brand=")[1].replace(/%20/g, " ").replace(/%27/g, "'");
// window.prompt(res);
//var score = str.split("&score=")[1];

var info = search(res);

if(info.enviro_info !== "No data for given company") {
  document.getElementById("query_warning").style.display = "none"
}


$("#brand_title").text(info.name);

//$("#row1col1").text("Some number");

$("#row1col2").text(info.enviro_info);

$("#row2col1").text(info.labor_score);

$("#row2col2").text(info.labor_info);