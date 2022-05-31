let city = document.getElementsByClassName('city');


function received() {

    navigator.geolocation.getCurrentPosition(function(position) { // It fetches the position of your locations 
        /*
        connecting lat of h3 in html to our  user defined variable here to reduce complexity 
        and most importantly it connects our variable to that id
        */
       let lat = position.coords.latitude; // displays the latitude
        let long= position.coords.longitude; // displays the longitude
    });
}