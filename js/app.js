var map, marker, infowindow;


//Initialize Map
function initMap() {

    map = new google.maps.Map(document.getElementById('map-canvas'), { //Map Data
        center: {
            lat: 45.5978,
            lng: -84.7675
        },
        zoom: 6,
        draggable: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeId: google.maps.MapTypeId.SATELITE
    });



    function googleError() {
        alert("Google Has Encountered An Error.  Please Try Again Later");
        console.log('error');
    }






    var locations = [ //Location Data
        {
            name: 'Founders Brewing Co.',
            lat: 42.9584,
            lng: -85.6742,
            url: 'http://www.foundersbrewing.com'
        },
        {
            name: 'Bells Brewery',
            lat: 42.285110,
            lng: -85.449972,
            url: 'http://www.bellsbeer.com'
        },
        {
            name: 'New Holland Brewing Co.',
            lat: 42.790067,
            lng: -86.104204,
            url: 'http://www.newhollandbrew.com'
        },
        {
            name: 'Shorts Brewing Co.',
            lat: 44.976315,
            lng: -85.210035,
            url: 'http://www.shortsbrewing.com'
        },
        {
            name: 'Dark Horse Brewery',
            lat: 42.266260,
            lng: -84.963444,
            url: 'http://www.darkhorsebrewery.com'
        },
        {
            name: 'Kuhnhenn Brewing Company',
            lat: 42.527963,
            lng: -83.046753,
            url: 'http://www.kbrewery.com'
        },
        {
            name: 'Jolly Pumpkin Artisan Ales',
            lat: 42.323838,
            lng: -83.878447,
            url: 'http://www.jollypumpkin.com'
        },
        {
            name: 'Arcadia Brewing Co.',
            lat: 42.295278,
            lng: -85.570512,
            url: 'http://www.arcadiaales.com'
        },
        {
            name: 'Detroit Beer Company',
            lat: 42.336136,
            lng: -83.048882,
            url: 'http://www.detroitbeerco.com'
        },
        {
            name: 'North Peak Brewing Company',
            lat: 44.765242,
            lng: -85.628562,
            url: 'http://www.northpeak.net'
        }
    ];



    function ViewModel() {
        var self = this;


        function placeInfo(data) { //Knockout Obsrvables
            self.name = ko.observable(data.name);
            self.url = ko.obsrvable(data.url);
            self.lat = ko.observable(data.lat);
            self.lng = ko.observable(data.lng);
            self.LatLng = ko.computed(function () {
                return self.lat() + self.lng();
            });
        };









        self.allPlaces = ko.observableArray(locations); //Links location data to an observable

        self.allPlaces().forEach(function (place) { //Creates markers and infowindows for each location on the map
            marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(place.lat, place.lng),
                title: place.name,
                animation: google.maps.Animation.DROP,
                icon: 'icons/beer.png',
            });
            place.marker = marker;
            place.marker.addListener('click', toggleBounce);

            function toggleBounce() {
                if (place.marker.getAnimation() !== null) {
                    place.marker.setAnimation(null);
                } else {
                    place.marker.setAnimation(google.maps.Animation.BOUNCE);
                    setTimeout(function () {
                        place.marker.setAnimation(null);
                    }, 1000);
                }
            }
            google.maps.event.addListener(place.marker, 'click', function () { //opens and bounces infowindow when marker is clicked.
                if (!infowindow) {
                    infowindow = new google.maps.InfoWindow({
                        content: content
                    });
                }
                infowindow.open(map, place.marker);
            });
            var infoNames = place.name;
            var urlNames = encodeURI(place.name);
            var wikiUrl = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + urlNames + "&limit=1&redirects=return&format=json";
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
                            content = '<div class="info">' + '<h4>' + infoNames + '</h4>' + '<p>' + response[2] + '</p>' + '<p>' + response[3] + '</p>' + '</div>'; //infowindow.setContent(content);
                        }
                    } else {
                        content = '<div class="info">' + '<h4>' + infoNames + '</h4>' + '<p>' + "Sorry, No Articles Found on Wikipedia" + '</p>' + '</div>'; //infowindow.setContent(content);
                    }
                },
                error: (function () {
                    content = '<div class="info">' + '<h3 class="text-center" id="infoTitle">' + infoNames + '</h3>' + '<p id="info">' + "Failed to reach Wikipedia Servers, please try again" + '</p>' + '</div>';
                    // infowindow.setContent(content);
                })
            });

        }); //End ForEach




        self.list = function (place, marker) {
            google.maps.event.trigger(place.marker, 'click');
        };



        // Search functionality on location names
        self.query = ko.observable(''); //Creates an observable for the search bar



        self.searchResults = ko.computed(function () {
            return ko.utils.arrayFilter(self.allPlaces(), function (list) {
                //Match search with items in sortedLocations() observable array
                var listFilter = list.name.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;

                if (listFilter) { //if user input matches any of the brewery names, show only the matches
                    list.marker.setVisible(true);

                } else {
                    list.marker.setVisible(false); //hide markers and list items that do not match results
                }

                return listFilter;

            });
        });
    }
    console.log(infowindow);



    //ViewModel End
    ko.applyBindings(new ViewModel());
} //initMap End
