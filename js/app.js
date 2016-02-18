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

    var placeInfo = function () {
        this.name = ko.observable(name);
        this.lat = ko.observable(lat);
        this.lng = ko.observable(lng);
    };

    function ViewModel() {
        var self = this;


        function markerDisplay(name) {
            for (i = 0; i < locations().length; i++) {
                latlng = new google.maps.LatLng(locations()[i].lat, locations()[i].lng);
                name = locations()[i].name;
                createMarker(latlng, name);
            }

        };


        function createMarker(latlng, name) {
            marker = new google.maps.Marker({
                map: map,
                position: latlng,
                title: name,
                animation: google.maps.Animation.DROP,
                icon: 'icons/beer.png',
                content: locations().name
            });
            //            marker.addListener('click', toggleBounce, function () {
            //                infoWindow.open(map, this);
            //            });

            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            };

            infoWindow = new google.maps.InfoWindow();

            google.maps.event.addListener(map, 'click', toggleBounce, function () {
                infoWindow.open(map, marker);
            });



        };
        markerDisplay();








        //TO DO Fix!!!

        //            var contentString = '<div class="iWindow row">' + '<h3 class="iText">' + locations()[0].push + '</h3>' + '</div>';
        //            var infowindow = new google.maps.InfoWindow({
        //               content: contentString
        //             });
        //             marker.addListener('click', function() {
        //             infowindow.open(map, this);
        //             });
        //
        //        console.log(locations()[2].name);
        //
        //        function addInfoWindow(marker, name) {
        //
        //            var infoWindow = new google.maps.InfoWindow({
        //                content: this.name
        //            });
        //
        //            google.maps.event.addListener(marker, 'click', function () {
        //                infoWindow.open(map, marker);
        //            });
        //        }
        //        addInfoWindow(marker, locations[i].name);
    };


    ko.applyBindings(ViewModel());
