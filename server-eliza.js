const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.set('port', process.env.PORT || 80);

app.use(express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/
app.get('/', function(req, res){
  res.sendFile('C:/Users/Eli/Documents/rutgers stuff/code/hackru21/hackru/hackru-S21/index.html');
});
app.get('/assets/lib/images/sweatshop.jpg', function(req, res){
	console.log("here");
  res.sendFile('C:/Users/Eli/Documents/rutgers stuff/code/hackru21/hackru/hackru-S21/assets/lib/images/sweatshop.jpg');
});

app.get('/assets/lib/images/childlabor.jpg', function(req, res){
	console.log("here 2");
  res.sendFile('C:/Users/Eli/Documents/rutgers stuff/code/hackru21/hackru/hackru-S21/assets/lib/images/childlabor.jpg');
});

app.get('/assets/common/js/parseUrl.js', function(req, res){
	console.log("here 3");
  res.sendFile('C:/Users/Eli/Documents/rutgers stuff/code/hackru21/hackru/hackru-S21/assets/common/js/parseUrl.js');
});

app.get('/assets/common/html/brandinfo.html', function(req, res){
	console.log("here 4");
  res.sendFile('C:/Users/Eli/Documents/rutgers stuff/code/hackru21/hackru/hackru-S21/assets/common/html/brandinfo.html');
});

app.get('/assets/common/js/data.js', function(req, res){
	console.log("here 5");
  res.sendFile('C:/Users/Eli/Documents/rutgers stuff/code/hackru21/hackru/hackru-S21/assets/common/js/data.js');
});

app.get('/assets/common/js/brandData.js', function(req, res){
	console.log("here 6");
  res.sendFile('C:/Users/Eli/Documents/rutgers stuff/code/hackru21/hackru/hackru-S21/assets/common/js/brandData.js');
});

app.get('/assets/common/html/brandinfo.html', function(req, res){
	console.log("here 7");
  res.sendFile('C:/Users/Eli/Documents/rutgers stuff/code/hackru21/hackru/hackru-S21/assets/common/html/brandinfo.html');
});


app.get('/style.css', function(req, res){
  res.sendFile('C:/Users/Eli/Documents/rutgers stuff/code/hackru21/hackru/hackru-S21/style.css');
});
app.get('/api', function(req, res) {
	console.log("here")
  var api_base = 'https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?';
  var auth_token = '&token=e26c031fb362046e4232370c8cb5ae70';
  var req_company = req.query.q;
  fetch(api_base + 'q=' + req_company + auth_token)
  .then(data => data.json())
  .then(data => res.json(data))
});
app.listen(app.get('port'), function(){
  console.log("Listening on port " + app.get('port'))
});