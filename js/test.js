ko.bindingHandlers.googlemap = {
    init: function (element, valueAccessor) {
        var
            value = valueAccessor(),
            latLng = new google.maps.LatLng(value.latitude, value.longitude),
            mapOptions = {
                zoom: 10,
                center: latLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            map = new google.maps.Map(element, mapOptions),
            marker = new google.maps.Marker({
                position: latLng,
                map: map
            });
    }
};

var vm = {
    locations: ko.observableArray([
        {
            name: "Cleveland",
            latitude: 41.48,
            longitude: -81.67
        },
        {
            name: "Chicago",
            latitude: 41.88,
            longitude: -87.63
        }
    ])
}

ko.applyBindings(vm);
