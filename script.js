var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?q=visa&token=e26c031fb362046e4232370c8cb5ae70", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));