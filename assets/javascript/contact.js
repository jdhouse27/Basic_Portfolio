$("document").ready(function() {
    
//   event.preventDefault();

    //GeoCode API
    var queryURL = "http://www.mapquestapi.com/geocoding/v1/address?key=fiqqofKeFA3fHIufKdF6cETbJpdkZslC&location=KansasCity,Kansas,66111"
    
    console.log(queryURL)
    //AJAX GET
    $.ajax({
        url: queryURL,
        method: "GET"
      })

      //response
      .then(function(response){
        console.log(response);

        // longitude and latitude varibles
        var lat = response.results[0].locations[0].latLng.lat;
        var long = response.results[0].locations[0].latLng.lng;
        console.log(lat);
        console.log(long);

        //leaflet load to page
        var mymap = L.map('mapid').setView([lat, long], 11);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamRob3VzZTI3IiwiYSI6ImNqdWFqNWsycjAzYWszeW5wdzZzbjdnYnQifQ.JfuL7pKOzZskrqctWDsrBA', {          
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 25,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiamRob3VzZTI3IiwiYSI6ImNqdWFqNWsycjAzYWszeW5wdzZzbjdnYnQifQ.JfuL7pKOzZskrqctWDsrBA' 
                }).addTo(mymap);
            
        var marker = L.marker([39.099792, -94.578559]).addTo(mymap);      
    })
});



