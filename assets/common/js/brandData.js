str = window.location.href;
var res = str.split("=");
console.log(res[1]);

var info = search(res[1]);

$("#row1col1").text("Some number");

$("#row1col2").text(info.enviro_info);

$("#row2col1").text(info.labor_score);

$("#row2col2").text(info.labor_info);
