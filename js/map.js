(function(window, google){
  //Map Optons
  var options = {
    center: {
        lat: 43.5978,
        lng: -84.7675
    },
    zoom: 7,
    icon: 'icons/beer.png',
    mapTypeId: google.maps.MapTypeId.ROADMAP
  },

  //Map
  element = document.getElementById('map-canvas'),
  map = new google.maps.Map(element, options);


  function MarkerViewModel(){
    var self = this;

    // var markers = ko.observableArray([
    //   {name: 'Founders Brewing Co.', lat: 42.9584, lng: -85.6742},
    //   {name: 'Bells Brewery', lat: 42.285110, lng: -85.449972},
    //   {name: 'New Holland Brewing Co.', lat: 42.790067, lng: -86.104204},
    //   {name: 'Shorts Brewing Co.', lat: 44.976315, lng: -85.210035},
    //   {name: 'Dark Horse Brewing Co.', lat: 42.266260, lng: -84.963444},
    //   {name: 'Atwater Brewery', lat: 42.337311, lng: -83.018083}
    // ])


    self.markers = [
      {name: 'Founders Brewing Co.', lat: 42.9584, lng: -85.6742},
      {name: 'Bells Brewery', lat: 42.285110, lng: -85.449972},
      {name: 'New Holland Brewing Co.', lat: 42.790067, lng: -86.104204},
      {name: 'Shorts Brewing Co.', lat: 44.976315, lng: -85.210035},
      {name: 'Dark Horse Brewing Co.', lat: 42.266260, lng: -84.963444},
      {name: 'Atwater Brewery', lat: 42.337311, lng: -83.018083}
    ];

  function markerDisplay() {
      for (var i = 0; i < self.markers.length; i++) {
        this.name = self.markers[i].name;
        this.latlng = new google.maps.LatLng(self.markers[i].lat, self.markers[i].lng);

        createMarker(latlng, name);
      }
  }
  markerDisplay();
  function createMarker(latlng, name) {
      var marker = new google.maps.Marker({
          map: map,
          position: latlng,
          title: name,
          icon: 'icons/beer.png'
      })
  }
};

MarkerViewModel();

// ko.applyBindings(new MarkerViewModel());


}(window, google));
