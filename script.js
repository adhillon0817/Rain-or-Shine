var cityfindEl = document.getElementsById("searchBox");
var findEl = document.getElementById("find"); 

var cityNameEl = document.getElementById("city-name");
var currentDateEl = document.getElementById("date");
var currentTempEl = document.getElementById("temperature");
var currentWindEl = document.getElementById("wind");
var currentHumidityEl = document.getElementById("humidity");

var today = moment().format("MM/DD/YYYY");



var apiKey = "0f003ceaa60fba131d9eb1c9a697784c";
var cityName = "";
// var search = JSON.parse(localStorage.getItem("city", JSON.stringify(selection)));
// var currentTime = moment().format("MM-DD-YYY");

// function renderLastRegistered();

\

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
    
    
    var  longLat = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=0f003ceaa60fba131d9eb1c9a697784c`


    fetch(longLat)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })

    
}

fetchGeolocation();
