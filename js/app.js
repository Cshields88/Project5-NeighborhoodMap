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

        locations = [
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
            self.locations = ko.observableArray(locations);
            self.marker = ko.observable('');
            self.search = ko.observable('');
            self.list = ko.observable(function () {
                alert(self.name);

            });
        };

        var infowindow; //Creates instance of infowindow

        //Loops through locations array
        for (var i = 0; i < locations.length; i++) {
            latlng = new google.maps.LatLng(locations[i].lat, locations[i].lng);
            marker = new google.maps.Marker({
                map: map,
                position: latlng,
                title: name,
                animation: google.maps.Animation.DROP,
                icon: 'icons/beer.png',
            });
            //Wrapped the event listeners in an anonymous function to work as a closure, allowing only one infowindow to be opened at a time.
            (function (i, marker) {
                google.maps.event.addListener(marker, 'click', function () {
                    //if statement checks to see if an infowindow exists, if not it will create one
                    if (!infowindow) {
                        infowindow = new google.maps.InfoWindow();
                    }
                    infowindow.setContent(locations[i].name);
                    infowindow.open(map, marker);
                });
                google.maps.event.addListener(marker, 'click', function () {
                    if (marker.getAnimation() !== null) {
                        marker.setAnimation(null);
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                        setTimeout(function () {
                            marker.setAnimation(null);
                        }, 1200);
                    }
                });
            }(i, marker));
        }; //End For Loop

        //Search Filtering


        //Wikipedia API
        //
        //



    }; //ViewModel End

    ko.applyBindings(new ViewModel());
