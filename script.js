var apiKey = "b6150b7a9c752389e1b9cd938e4b061e";

//Submit the form to fetch weather information

// Handle button clicks to fetch weather information

// Fetch Geolocation Data (Geocoding API)


// Fetch Weather Data (Onecall)

function fetchGeolocation(cityName) {
    var request = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b6150b7a9c752389e1b9cd938e4b061e';

    
    fetch(request)
    .then(funtion(response) {
        return response.json();
    })
}