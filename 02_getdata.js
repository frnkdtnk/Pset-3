var fetch = require('node-fetch');

var url = 'https://api-v3.mbta.com/vehicles?api_key=7b4d0b0cae4146da93cbe785936db9ff&filter[route]=1&include=trip';

var data = function(){
    fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){console.log(json);})

};

setInterval(data, 15000);