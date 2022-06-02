function getweather()
{
    navigator.geolocation.getCurrentPosition(function(position) { // It fetches the position of your locations 
       
       let lat = position.coords.latitude; // displays the latitude
       let long = position.coords.longitude; // displays the longitude
     let city = document.getElementById('cityName');
       let climate = document.getElementById('climate');
       fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=23Hn5tIlFNLupmd0XJbA2uf1Kq1HRCf8&q=${lat}%2C%20${long}`).then(weather => { 
       return weather.json() }).then(display);
       
       function display(weather)
       {
        city.innerHTML =`${weather.EnglishName}`;
        let game = `${weather.Key}`;
           fetch(`http://dataservice.accuweather.com/currentconditions/v1/${game}?apikey=23Hn5tIlFNLupmd0XJbA2uf1Kq1HRCf8`).then(weathr => { 
            return weathr.json() }).then(locate);
            
        function locate(weathr)
        {
            climate.innerHTML =`${(weathr[0].Temperature.Metric.Value)}<span>°c</span>`; 
        }

       }

    });
}