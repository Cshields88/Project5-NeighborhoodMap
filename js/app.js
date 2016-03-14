    //Initialize Map
    var map, mapDiv;

    function initMap() {
        mapDiv = document.getElementById('map-canvas');
        map = new google.maps.Map(mapDiv, {
            center: {
                lat: 43.5978,
                lng: -84.7675
            },
            zoom: 7,
            draggable: true
        })
    };

    initMap();

    function ViewModel() {
        var self = this;

        self.locations = [
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
        ];


        function placeInfo() {
            self.name = ko.observable(name);
            self.lat = lat;
            self.lng = lng;

            self.locations = ko.observableArray(locations);
            self.marker = ko.observable([]);
            self.search = ko.observable('');
            self.list = ko.observable(function () {
                //TO DO

            });
        };


        function markerCreate() {
            for (i = 0; i < self.locations.length; i++) {
                latlng = new google.maps.LatLng(self.locations[i].lat, self.locations[i].lng);
                marker = new google.maps.Marker({
                    map: map,
                    position: latlng,
                    title: name,
                    animation: google.maps.Animation.DROP,
                    icon: 'icons/beer.png',
                });
                markerId = self.locations[i].name;

                infowindow = new google.maps.InfoWindow({
                    content: markerId
                });
                attachInfowindow(marker, markerId);
            };

            function attachInfowindow(marker, markerId) {

                marker.infowindow = '';
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
                    infowindow.open(map, marker);
                });
            };

        };
        markerCreate();

        //Search Filtering


        //Wikipedia API
        //
        //


    }; //ViewModel End

    ko.applyBindings(new ViewModel());
