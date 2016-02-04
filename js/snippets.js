addMarker: function (name, lat, lng, icon) {
        this.createMarker(name, lat, lng, icon);
    },

    createMarker: function (name, lat, lng, icon) {
        var opts = {
            name: icon,
            position: new google.maps.LatLng(lat, lng),
            icon: icon,
            map: map
        };
        return new google.maps.Marker(opts);
    }



(function (window, google) {
    "use strict";
    //Map Options
    var options = {
            center: {
                lat: 41.9164,
                lng: -83.3978
            },
            zoom: 5
        },
        element = document.getElementById('map-canvas'),
        //Map
        map = new google.maps.Map(element, options),


        marker = new google.maps.Marker({

            addMarker: function (name, lat, lng, icon) {
                this.createMarker(name, lat, lng, icon);
            },

            createMarker: function (name, lat, lng, icon) {
                var opts = {
                    name: icon,
                    position: new google.maps.LatLng(lat, lng),
                    icon: icon,
                    map: map
                };
                return new google.maps.Marker(opts);
            }
        });


}(window, google));


var map = function () {
    this.mapOptions = {
        center: {
            lat: 41.9164,
            lng: -83.3978
        },
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(document.getElementById('map-canvas'), this.mapOptions);



};




var marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: parliament
});
google.maps.event.addListener(marker, 'click', toggleBounce);

ko.bindingHandlers.map = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var position = new google.maps.LatLng(allBindingsAccessor().latitude(), allBindingsAccessor().longitude());
        var marker = new google.maps.Marker({
            map: allBindingsAccessor().map,
            position: position,
            icon: 'icons/beer.png',
            title: name
        });
        viewModel._mapMarker = marker;
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var latlng = new google.maps.LatLng(allBindingsAccessor().latitude(), allBindingsAccessor().longitude());
        viewModel._mapMarker.setPosition(latlng);
    }
}
allBindingsAccessor().latitude()
allBindingsAccessor().longitude()
allBindingsAccessor().map()

ViewModel._mapMarker = marker;
ViewModel._mapMarker.setPosition(latlng);





var infoWindow = new google.maps.infowindow({
    name: []
});

var marker, i;

for (i = 0; i < self.locations.length; i++) {
    marker = new google.maps.Marker({
        postion: (self.locations[i][1], self.locations[i][2]),
        icon: (locations[i][3]),
        map: map
    });

}(marker, i));
}

