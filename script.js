var apiKey = "0f003ceaa60fba131d9eb1c9a697784c";
var cityName = "";
// var search = JSON.parse(localStorage.getItem("city", JSON.stringify(selection)));
// var currentTime = moment().format("MM-DD-YYY");

// function renderLastRegistered();

var citySelection = JSON.parse

function fetchGeolocation(cityName) {
    var request = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=0f003ceaa60fba131d9eb1c9a697784c
    `;
    
     
    fetch(request)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        //need to get the lat and long fromd ata object
        //then call fetchonecallweiather and pass lat and long 
    })


}

function fetchOneCallWeather(lat, lon) {
    
    
    var  longLat = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=b6150b7a9c752389e1b9cd938e4b061e`


    fetch(longLat)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })

    
}

fetchGeolocation();
