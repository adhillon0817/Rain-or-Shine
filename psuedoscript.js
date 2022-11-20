// var apiKey = "b6150b7a9c752389e1b9cd938e4b061e";

// //Submit the form to fetch weather information

//     //Fetch the city name from the text <input>
    
//     // Call the 'fetchGeolocation' and pass the city name

// // Handle button clicks to fetch weather information

//     // Get the city name from the clicked button's (event.target) data-name attribute

//     // Call the 'fetchGeolocation' and pass the city name 

// // Fetch Geolocation Data (Geocoding API)

// function fetchGeolocation(cityName) {
//     var request = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=b6150b7a9c752389e1b9cd938e4b061e`;

    
//     fetch(request)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
// }

// fetchGeolocation("Seattle");
// fetchGeolocation("Simmey Valley");


// // Fetch Weather Data (Onecall)

// function fetchOneCallWeather() {
    
//     var request = `https://api.openweathermap.org/data/2.5/onecall?appid=b6150b7a9c752389e1b9cd938e4b061e&lat=${lat}.4404925&lon=${log}&units=imperial&exclude=hourly,minutely`


//     fetch(request)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })

    
// }

// fetchOneCallWeather();
