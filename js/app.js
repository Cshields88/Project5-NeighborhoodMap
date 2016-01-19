(function (window, google) {
    "use strict";
    //Map Options
    var options = {
            center: {
                lat: 41.9164,
                lng: -83.3978
            },
            zoom: 11
        },
        element = document.getElementById('map-canvas'),
        //Map
        map = new google.maps.Map(element, options),


        marker = {

            addMarker: function (name, lat, lng, icon) {
                this.createMarker(name, lat, lng, icon);
            },

            createMarker: function (name, lat, lng, icon) {
                var opts = {
                    name: icon,
                    position: {
                        lat: lat,
                        lng: lng
                    },
                    icon: icon,
                    map: map
                };
                return new google.maps.Marker(opts);
            }
        };

    map.addMarker(42.3593, -83.0648, '../icons/art-museum-2.png');


}(window, google));
