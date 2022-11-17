var cityfindEl = document.getElementsById("searchBox");
var findEl = document.getElementById("find"); 

var cityNameEl = document.getElementById("city-name");
var currentDateEl = document.getElementById("date");
var currentTempEl = document.getElementById("temperature");
var currentWindEl = document.getElementById("wind");
var currentHumidityEl = document.getElementById("humidity");

var today = moment().format("MM/DD/YYYY");

var cityListEl = document.getElementById("search-list")

var apiKey = "0f003ceaa60fba131d9eb1c9a697784c";

var dayOneDateEl = document.getElementById("dateone");
var dayOneTempEl = document.getElementById("tempone");
var dayOneWindEl = document.getElementById("windone");
var dayOneHumidityEl = document.getElementById("humidityone");


var dayTwoDateEl = document.getElementById("dateTwo");
var dayTwoTempEl = document.getElementById("tempTwo");
var dayTwoWindEl = document.getElementById("windTwo");
var dayTwoHumidityEl = document.getElementById("humidityTwo");


var dayThreeDateEl = document.getElementById("datethree");
var dayThreeTempEl = document.getElementById("tempthree");
var dayThreeWindEl = document.getElementById("windthree");
var dayThreeHumidityEl = document.getElementById("humiditythree");


var dayFourDateEl = document.getElementById("datefour");
var dayFourTempEl = document.getElementById("tempfour");
var dayFourWindEl = document.getElementById("windfour");
var dayFourHumidityEl = document.getElementById("humidityfour");


var dayFiveDateEl = document.getElementById("datefive");
var dayFiveTempEl = document.getElementById("tempfive");
var dayFiveHumidityEl = document.getElementById("humidityfive");


// var search = JSON.parse(localStorage.getItem("city", JSON.stringify(selection)));
// var currentTime = moment().format("MM-DD-YYY");

// function renderLastRegistered();



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
