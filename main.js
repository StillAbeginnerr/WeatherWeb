function getweather()
{
    navigator.geolocation.getCurrentPosition(function(position) { // It fetches the position of your locations 
       
       let lat = position.coords.latitude; // displays the latitude
       let long = position.coords.longitude; // displays the longitude
       let city = document.getElementById('cityName');
       let climate = document.getElementById('climate');
       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c1646a94e55852c9b4208fe7d0591835`).then(weather => { return weather.json() }).then(display);
       
       function display(weather)
       {
           city.innerHTML =`${weather.name}`;
           climate.innerHTML =`${Math.round(weather.main.temp)/10}<span>°c</span>`; 
       }

    });
}