
str = window.location.href;
var name = str.split("brand=")[1].replace(/%20/g, " ").replace(/%27/g, "'");
// window.prompt(name);

var environmentalScore = "N/A"
switch(name) {
  case "pacsun":
    environmentalScore = 445
    break;
  case "zara":
    environmentalScore = 200
    break;
  case "hanes":
    environmentalScore = 200
    break;
  case "champion":
    environmentalScore = 210
    break;
  case "chanel":
    environmentalScore = 200
    break;
  case "boohoo":
    environmentalScore = 493
    break;
  case "uniqlo":
    environmentalScore = 310
    break;
}

var info = search(name);

if(info.enviro_info !== "No data for given company") {
  document.getElementById("query_warning").style.display = "none"
}


$("#brand_title").text(info.name);

$("#row1col1").text(environmentalScore);

$("#row1col2").text(info.enviro_info);

$("#row2col1").text(info.labor_score);

$("#row2col2").text(info.labor_info);