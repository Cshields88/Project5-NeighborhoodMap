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
        draggable: false,
        scrollwheel: false
    })

};

initMap();


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
        name: 'Dark Horse Brewery',
        lat: 42.266260,
        lng: -84.963444
    },
    {
        name: 'Kuhnhenn Brewing Company',
        lat: 42.527963,
        lng: -83.046753
    },
    {
        name: 'Jolly Pumpkin Artisan Ales',
        lat: 42.323838,
        lng: -83.878447
    },
    {
        name: 'Arcadia Brewing Co.',
        lat: 42.295278,
        lng: -85.570512
    },
    {
        name: 'Detroit Beer Company',
        lat: 42.336136,
        lng: -83.048882
    },
    {
        name: 'North Peak Brewing Company',
        lat: 44.765242,
        lng: -85.628562
    }
];



function ViewModel() {
    var self = this;

    function placeInfo(data) {
        self.name = ko.observable(data.name);
        self.lat = ko.observable(data.lat);
        self.lng = ko.observable(data.lng);
        self.LatLng = ko.computed(function () {
            return self.lat() + self.lng;
        })
    };

    var infowindow; //Creates instance of infowindow
    var content;

    self.allPlaces = ko.observableArray(locations);



    // self.makeMarkers = function () {
    //        locations.forEach(function (loc) {
    //            self.allPlaces.push(new placeInfo(loc));
    //        });

    self.allPlaces().forEach(function (place) {
        place.marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(place.lat, place.lng),
            title: place.name,
            animation: google.maps.Animation.DROP,
            icon: 'icons/beer.png',
        });
        var infoNames = place.name;
        var urlNames = encodeURI(place.name);
        //Wrapped the event listeners in an anonymous function to work as a closure, allowing only one infowindow to be opened at a time.
        google.maps.event.addListener(place.marker, 'click', function () {
            //if statement checks to see if an infowindow exists, if not it will create one
            if (!infowindow) {
                infowindow = new google.maps.InfoWindow();
            }

            infowindow.open(map, place.marker);


            //Wikipedia API

            var wikiUrl = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + urlNames + "&limit=1&redirects=return&format=json"

            $.ajax({
                url: wikiUrl,
                dataType: "jsonp",
                success: function (response) {
                    var articleList = response[1];
                    console.log(response);

                    if (articleList.length > 0) {
                        for (var i = 0; i < articleList.length; i++) {
                            var articleStr = articleList[i];
                            var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                            content = '<div class="info">' + '<h4>' + infoNames + '</h4>' + '<p>' + response[2] + '</p>' + '<p>' + response[3] + '</p>' + '</div>';
                            infowindow.setContent(content);

                        };
                    } else {
                        content = '<div class="info">' + '<h4>' + infoNames + '</h4>' + '<p>' + "Sorry, No Articles Found on Wikipedia" + '</p>' + '</div>';
                        infowindow.setContent(content);
                    }

                },
                error: (function () {
                    content = '<div class="info">' + '<h4>' + infoNames + '</h4>' + '<p>' + "Failed to reach Wikipedia Servers, please try again" + '</p>' + '</div>';
                    infowindow.setContent(content);
                })
            });

            console.log(wikiUrl);

        });
        google.maps.event.addListener(place.marker, 'click', function () {
            if (place.marker.getAnimation() !== null) {
                place.marker.setAnimation(null);
            } else {
                place.marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function () {
                    place.marker.setAnimation(null);
                }, 1200);
            }
        });

        self.list = ko.observable(function () {

        });
    }); //End ForEach



    // };
    //self.makeMarkers();

    //Search Filtering
    this.search = ko.observable("");


    // var infoNames = place.name;







}; //ViewModel End


ko.applyBindings(new ViewModel());
