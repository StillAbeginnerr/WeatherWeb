function getweather()
{
    //Plays the sound when the button is clicked
      var audio = new Audio('button-3.mp3');
         audio.play();


    // It fetches the position of your locations 
         navigator.geolocation.getCurrentPosition(function(position) { 
       
       let lat = position.coords.latitude; // displays the latitude
       let long = position.coords.longitude; // displays the longitude

       // Connection of elements to index.html
     let city = document.getElementById('cityName');
       let climate = document.getElementById('climate');
       let forecast = document.getElementById('future');


       // Backend Code with Fetch Api and connecting elements to it with innerHTML
       fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=23Hn5tIlFNLupmd0XJbA2uf1Kq1HRCf8&q=${lat}%2C%20${long}`).then(weather => { 
       return weather.json() }).then(display);
       

       // Function of the main API
       function display(weather)
       {        
        city.innerHTML =`${weather.EnglishName}`;
        let game = `${weather.Key}`;

        // SubAPI to get current Weather Conditions
           fetch(`http://dataservice.accuweather.com/currentconditions/v1/${game}?apikey=23Hn5tIlFNLupmd0XJbA2uf1Kq1HRCf8`).then(weathr => { 
            return weathr.json() }).then(locate);
            
        function locate(weathr)
        {
            climate.innerHTML =`${(weathr[0].Temperature.Metric.Value)}<span>°c</span>` + " ,"+`${weathr[0].WeatherText}`; 
        }

// SubApi to get the Tomorrow's Forecast
fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${game}?apikey=%0923Hn5tIlFNLupmd0XJbA2uf1Kq1HRCf8&metric=true`).then( data => data.json()).then(future);
function future(data)
{
    forecast.innerHTML=`${data.DailyForecasts[0].Temperature.Maximum.Value}<span>°c</span>`+ "  " + `${data.DailyForecasts[0].Day.IconPhrase}` ;
}


       }

    });
}