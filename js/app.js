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


        var MarkerViewModel = function () {

            function markerDisplay() {
                for (var i = 0; i < locations.length; i++) {
                    var latlng = new google.maps.LatLng(locations[i].lat, locations[i].lng);
                    var name = locations[i].name;
                    createMarker(latlng, name);
                }
            };


        function createMarker(latlng, name) {
            var marker = new google.maps.Marker({
                map: map,
                position: latlng,
                title: name
            })
        };

        markerDisplay();
        //Locations Array holding Marker Properties
        var locations = ko.observableArray([
        //Location 1
            {
                name: 'Founders Brewing Co.',
                position: {
                    lat: 42.9584,
                    lng: -85.6742
                },
                icon: 'icons/beer.png'
            },
        //Location 2
            {
                name: 'Bells Brewery',
                position: {
                    lat: 42.285110,
                    lng: -85.449972
                },
                icon: 'icons/beer.png'
            },
        //Location 3
            {
                name: 'New Holland Brewing Co.',
                position: {
                    lat: 42.790067,
                    lng: -86.104204
                },
                icon: 'icons/beer.png'
            },
        //Location 4
            {
                name: 'Shorts Brewing Co.',
                position: {
                    lat: 44.976315,
                    lng: -85.210035
                },
                icon: 'icons/beer.png'
        },
        //Location 5
            {
                name: 'Dark Horse Brewing Co.',
                position: {
                    lat: 42.266260,
                    lng: -84.963444
                },
                icon: 'icons/beer.png'
            },
        //Location 6
            {
                name: 'Atwater Brewery',
                position: {
                    lat: 42.337311,
                    lng: -83.018083
                },
                icon: 'icons/beer.png'
            }
        // //Location 7
        //     {
        //         name: 'Arbor Brewing Co.',
        //         position: {
        //             lat: 42.250136,
        //             lng: -83.609713,
        //         },
        //         icon: 'icons/beer.png'
        //     },
        // //Location 8
        //     {
        //         name: 'Arcadia Brewing Co.',
        //         position: {
        //             lat: 42.295278,
        //             lng: -85.570512
        //         },
        //         icon: 'icons/beer.png'
        // },
        // //Location 9
        //     {
        //         name: 'Right Brain Brewery',
        //         position: {
        //             lat: 44.749605,
        //             lng: -85.619070
        //         },
        //         icon: 'icons/beer.png'
        // },
        // //Location 10
        //     {
        //         name: 'Original Gravity Brewing Co.',
        //         position: {
        //             lat: 42.083974,
        //             lng: -83.674940
        //         },
        //         icon: 'icons/beer.png'
        // }

        ]);
    };
        ko.applyBindings(new MarkerViewModel());
