var map = new google.maps.Map(document.getElementById('mapview'), {
    center: new google.maps.LatLng(0, 0),
    mapTypeId: google.maps.MapTypeId.ROADMAP    });
var i = 0;
var marker = new google.maps.Marker({
    position: new google.maps.LatLng(ko.toJS(self.Latitude), ko.toJS(self.Longitude))
    map: map,
    clickable: true,
    draggable: false
    marker.info = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', function() {    marker.info.open(map, marker);    });
markers[i++] = marker;    });
var bounds = new google.maps.LatLngBounds();
for (i = 0; i &lt; markers.length; i++) {    bounds.extend(markers[i].getPosition());    }    map.fitBounds(bounds);
