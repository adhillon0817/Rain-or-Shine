var apiKey = "b6150b7a9c752389e1b9cd938e4b061e";
var selection = "";
var currentTime = moment().format("MM-DD-YYY");

function fetchGeolocation(cityName) {
    var request = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=b6150b7a9c752389e1b9cd938e4b061e`;
    
     
    fetch(request)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })

}

function fetchOneCallWeather() {
    
    var  longLat = `https://api.openweathermap.org/data/2.5/onecall?appid=b6150b7a9c752389e1b9cd938e4b061e&lat=${lat}.4404925&lon=${log}&units=imperial&exclude=hourly,minutely`


    fetch(longLat)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })

    
}

fetchOneCallWeather();
