    //Initialize Map
    var map, mapDiv;

    function initMap() {
        var mapDiv = document.getElementById('map-canvas');
        var map = new google.maps.Map(mapDiv, {
            center: {
                lat: 43.5978,
                lng: -84.7675
            },
            zoom: 8
        })
    };
      initMap();



        function MarkerViewModel () {

  //Locations Array holding Marker Properties
          var locations = ko.observableArray([
            {name: 'Founders Brewing Co.', lat: 42.9584, lng: -85.6742},
            {name: 'Bells Brewery', lat: 42.285110, lng: -85.449972},
            {name: 'New Holland Brewing Co.', lat: 42.790067, lng: -86.104204},
            {name: 'Shorts Brewing Co.', lat: 44.976315, lng: -85.210035},
            {name: 'Dark Horse Brewing Co.', lat: 42.266260, lng: -84.963444},
            {name: 'Atwater Brewery', lat: 42.337311, lng: -83.018083}
          ])

          function markerDisplay() {
            for (var i = 0; i < locations().length; i++) {
              var latlng = new google.maps.LatLng(locations()[i].lat, locations()[i].lng);
              var name = locations()[i].name;
              createMarker(latlng, name);
            }
          };


        function createMarker(latlng, name) {
            var marker = new google.maps.Marker({
                map: map,
                position: latlng,
                title: name,
                icon: 'icons/beer.png'
            })
        };
      //  markerDisplay();


        };
        ko.applyBindings(MarkerViewModel());
