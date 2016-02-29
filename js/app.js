    //Initialize Map
    var map, mapDiv, infowindow;

    function initMap() {
        mapDiv = document.getElementById('map-canvas');
        map = new google.maps.Map(mapDiv, {
            center: {
                lat: 43.5978,
                lng: -84.7675
            },
            zoom: 7,
            draggable: false
        })
    };

    initMap();






    //Locations Array holding Marker Properties
    var locations = ko.observableArray([
        {
            name: 'Founders Brewing Co.',
            lat: 42.9584,
            lng: -85.6742
            },
        {
            name: 'Bells Brewery',
            lat: 42.285110,
            lng: -85.449972
            },
        {
            name: 'New Holland Brewing Co.',
            lat: 42.790067,
            lng: -86.104204
            },
        {
            name: 'Shorts Brewing Co.',
            lat: 44.976315,
            lng: -85.210035
            },
        {
            name: 'Dark Horse Brewing Co.',
            lat: 42.266260,
            lng: -84.963444
            },
        {
            name: 'Atwater Brewery',
            lat: 42.337311,
            lng: -83.018083
            },
        {
            name: 'Arbor Brewing Co.',
            lat: 42.250136,
            lng: -83.609713
            },
        {
            name: 'Arcadia Brewing Co.',
            lat: 42.295278,
            lng: -85.570512
            },
        {
            name: 'Right Brain Brewery',
            lat: 44.749605,
            lng: -85.619070
            },
        {
            name: 'Original Gravity Brewing Co.',
            lat: 42.083974,
            lng: -83.674940
            }
    ]);



    function ViewModel() {
        var self = this;

        var placeInfo = function () {
            this.name = ko.observable(name);
            this.lat = ko.observable(lat);
            this.lng = ko.observable(lng);
        };



        function markerCreate(latlng, name, marker, attachInfowindow, markerId) {
            for (i = 0; i < locations().length; i++) {
                marker = new google.maps.Marker({
                    map: map,
                    position: latlng,
                    title: name,
                    animation: google.maps.Animation.DROP,
                    icon: 'icons/beer.png',

                });
                latlng = new google.maps.LatLng(locations()[i].lat, locations()[i].lng);
                markerId = locations()[i].name;
                attachInfowindow(marker, markerId);
            }



            function attachInfowindow(marker, markerId) {
                infowindow = new google.maps.InfoWindow();
                marker.infowindow = infowindow;
                content = markerId;
                infowindow.setContent(content);

                marker.addListener('click', function () {
                    if (marker.getAnimation() !== null) {
                        marker.setAnimation(null);
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                        setTimeout(function () {
                            marker.setAnimation(null);
                        }, 1200);
                    }

                });
                marker.addListener('click', function () {
                    return marker.infowindow.open(map, marker);
                });


            };

        }

        markerCreate();


        //Wikipedia API



    }; //ViewModel End

    ko.applyBindings(new ViewModel());
