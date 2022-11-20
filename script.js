var cityfindEl = document.getElementById("searchBox");
var findEl = document.getElementById("find"); 

var cityNameEl = document.getElementById("cityName");
var currentDateEl = document.getElementById("date");
var currentTempEl = document.getElementById("temperature");
var currentWindEl = document.getElementById("wind");
var currentHumidityEl = document.getElementById("humidity");


var today = moment().format("MM/DD/YYYY");

var cityListEl = document.getElementById("search-list")

var apiKey = "1a190c9a0e4a3732473d9dce4591368f";

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
var dayFiveWindEl = document.getElementById("windfour");
var dayFiveHumidityEl = document.getElementById("humidityfive");


// var search = JSON.parse(localStorage.getItem("city", JSON.stringify(selection)));


// function renderLastRegistered();



function fetchGeolocation(cityName) {
    var request = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=1a190c9a0e4a3732473d9dce4591368f`;
  
     
    fetch(request)
    .then(function(response) {
        return response.json();
    })  

    .then(function(data) {
        console.log(data)
        cityNameEl.innerHTML=data.name;
        currentDateEl.innerHTML=today;
        currentTempEl.innerHTML= "Temperature: " + data.main.temp + "°F";
        image.pngcurrentWindEl.innerHTML= "Wind: " + data.wind.speed + "mph";
        currentHumidityEl.innerHTML= "Humidity: " + data.main.humidity + "%";
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        
        

        fetchOneCallWeather(lat, lon);
          
      })


    // .then(function(data) {
    //     cityNameEl.innerHTML=data.name;
    //     currentDateEl.innerHTML=today;
    //     currentTempEl.innerHTML= "Temperature: " + data.main.temp + "°F";
    //     currentWindEl.innerHTML= "Wind: " + data.wind.speed + "mph";
    //     currentHumidityEl.innerHTML= "Humidity: " + data.main.humidity + "%";
    //     console.log(data);
        
    // })

}

findEl.addEventListener("click",function(){
    var cityName = cityfindEl.value;
    fetchGeolocation(cityName);
    var cityInfo = [];
    cityInfo = cityName.split(" ");

    localStorage.setItem("key",JSON.stringify(cityInfo));
    var displayName = JSON.parse(localStorage.getItem('key'));

    var li = document.createElement("li");
    li.textContent = displayName;
    cityListEl.appendChild(li);
})

function showCityList(cityName){
    var displayName = JSON.parse(localStorage.getItem(cityName))
    console.log(displayName);
}






function fetchOneCallWeather(lat, lon) {
    
    
    var longLat = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=1a190c9a0e4a3732473d9dce4591368f`

    fetch(longLat)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        // if (!data[0]){
        //     alert('Location not found');
        // }

        for (var i = 1; i <6; i++){
            var singleDate =$("<h4>")
            .addClass("singleDate")
            .text(moment.unix(data.daily[i].dt).format("L"));


            var singleTemp = $("<div>")
            .addClass("temp")
            .text(`Temp: ` +data.daily[i].temp.max  +  `°F` );

            var singleWind = $("<div>")
            .addClass("wind")
            .text(`Wind: ` + data.daily[i].wind + `mps` );
            // console.log(singleWind)

            var singleHumid = $("<div>")
            .addClass("humid")
            .text(`Humidity ` + data.daily[i].humidity + `%`);

            var singleCard = $("<div>")
            .addClass("singlecard")
            .append(singleDate, singleTemp, singleWind, singleHumid, singleCard);
           
            var wholeCard = $("#whole-card");
            $(wholeCard).append(singleCard)
        }
        
    });
}


// fetchGeolocation();

// function getforecast(cityName) {
//     var request = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=0f003ceaa60fba131d9eb1c9a697784c`;
    
     
//     fetch(request)
//     .then(function(response) {
//         return response.json();
//     })

//     .then(function(data){

//         var dayOne = moment().add(1, "days").format("MM/DD/YYYY");
//         dayOneDateEl.innerHTML = dayOne;
//         dayOneTempEl.innerHTML = "Temperature: " + data.main.temp + "°F";
//         dayOneWindEl.innerHTML = "Wind: " + data.wind.speed + "mph";
//         dayOneHumidityEl.innerHTML = "Humidity: " + data.main.humidity + "%";
        
    
//     })

//     .then(function(data){

//         var dayTwo = moment().add(2, "days").format("MM/DD/YYYY");
//         dayTwoDateEl.innerHTML = dayTwo;
//         dayTwoTempEl.innerHTML = "Temperature: " + data.list[8].main.temp + "°F";
//         dayTwoWindEl.innerHTML = "Wind: " + data.list[8].main.wind.speed + "mph";
//         dayTwoHumidityEl.innerHTML = "Humidity: " + data.list[8].main.humidity + "%";
        
    
//     })

//     .then(function(data){

//         var dayThree = moment().add(3, "days").format("MM/DD/YYYY");
//         dayThreeDateEl.innerHTML = dayThree;
//         dayThreeTempEl.innerHTML = "Temperature: " + data.list[16].main.temp + "°F";
//         dayThreeWindEl.innerHTML = "Wind: " + data.list[16].main.wind.speed + "mph";
//         dayThreeHumidityEl.innerHTML = "Humidity: " + data.list[16].main.humidity + "%";
        
    
//     })

//     .then(function(data){

//         var dayFour = moment().add(4, "days").format("MM/DD/YYYY");
//         dayFourDateEl.innerHTML = dayFour;
//         dayFourTempEl.innerHTML = "Temperature: " + data.list[24].main.temp + "°F";
//         dayFourWindEl.innerHTML = "Wind: " + data.list[24].main.wind.speed + "mph";
//         dayFourHumidityEl.innerHTML = "Humidity: " + data.list[24].main.humidity + "%";
        
    
//     })

//     .then(function(data){

//         var dayFive = moment().add(5, "days").format("MM/DD/YYYY");
//         dayFiveDateEl.innerHTML = dayFive;
//         dayFiveTempEl.innerHTML = "Temperature: " + data.list[32].main.temp + "°F";
//         dayFiveWindEl.innerHTML = "Wind: " + data.list[32].main.wind.speed + "mph";
//         dayFiveHumidityEl.innerHTML = "Humidity: " + data.list[32].main.humidity + "%";
        
    
//     })
    
// }



