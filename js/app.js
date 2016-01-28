//Initialize Map
var map, mapDiv;

function initMap() {
    var mapDiv = document.getElementById('map-canvas');
    var map = new google.maps.Map(mapDiv, {
        center: {
            lat: 43.5978,
            lng: -84.7675
        },
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

    });
}

_addMarker: function (lat, lng) {
    return self._createMarker(lat, lng);
};

_createMarker: function (lat, lng) {
    var options = {
        position: {
            lat: lat,
            lng: lng
        },
        map: map,
        icon: icon
    }
};

var MarkerViewModel = function (marker, lat, lng, icon, markerLocations, map) {
    var self = this;



    self.marker = new google.map.Marker(lat, lng);
    self.name = ko.observable(name);
    self.markerLocation = new google.maps.LatLng(lat, lng);
    self.icon = ko.observable(icon);
    self.map = ko.observable(map);



    map.addMarker(42.9584, -85.6742);

    //Locations Array holding Marker Properties
    var Locations = ko.observableArray([
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
            },
        //Location 7
        {
            name: 'Arbor Brewing Co.',
            position: {
                lat: 42.250136,
                lng: -83.609713,
            },
            icon: 'icons/beer.png'
            },
        //Location 8
        {
            name: 'Arcadia Brewing Co.',
            position: {
                lat: 42.295278,
                lng: -85.570512
            },
            icon: 'icons/beer.png'
        },
        //Location 9
        {
            name: 'Right Brain Brewery',
            position: {
                lat: 44.749605,
                lng: -85.619070
            },
            icon: 'icons/beer.png'
        },
        //Location 10
        {
            name: 'Original Gravity Brewing Co.',
            position: {
                lat: 42.083974,
                lng: -83.674940
            },
            icon: 'icons/beer.png'
        }

        ]);



};







ko.applyBindings(MarkerViewModel());
