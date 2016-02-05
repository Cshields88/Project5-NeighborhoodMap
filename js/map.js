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




  var MarkerViewModel = function(){
    var self = this;

    var locations = ko.observableArray([
      {name: 'Founders Brewing Co.', lat: 42.9584, lng: -85.6742},
      {name: 'Bells Brewery', lat: 42.285110, lng: -85.449972},
      {name: 'New Holland Brewing Co.', lat: 42.790067, lng: -86.104204},
      {name: 'Shorts Brewing Co.', lat: 44.976315, lng: -85.210035},
      {name: 'Dark Horse Brewing Co.', lat: 42.266260, lng: -84.963444},
      {name: 'Atwater Brewery', lat: 42.337311, lng: -83.018083}
    ]);


    // var locations = [
    //   {name: 'Founders Brewing Co.', lat: 42.9584, lng: -85.6742},
    //   {name: 'Bells Brewery', lat: 42.285110, lng: -85.449972},
    //   {name: 'New Holland Brewing Co.', lat: 42.790067, lng: -86.104204},
    //   {name: 'Shorts Brewing Co.', lat: 44.976315, lng: -85.210035},
    //   {name: 'Dark Horse Brewing Co.', lat: 42.266260, lng: -84.963444},
    //   {name: 'Atwater Brewery', lat: 42.337311, lng: -83.018083},
    //   {name: 'Arbor Brewing Co.', lat: 42.250136, lng: -83.609713},
    //   {name: 'Arcadia Brewing Co.', lat: 42.295278, lng: -85.570512},
    //   {name: 'Right Brain Brewery', lat: 44.749605, lng: -85.619070},
    //   {name: 'Original Gravity Brewing Co.', lat: 42.083974, lng: -83.674940}
    // ];
    //
    //



  function markerDisplay() {
      for (var i = 0; i < locations().length; i++) {
        this.name = locations()[i].name;
        this.latlng = new google.maps.LatLng(locations()[i].lat, locations()[i].lng);

        createMarker(latlng, name);
      }
  }

  function createMarker(latlng, name) {
      var marker = new google.maps.Marker({
          map: map,
          position: latlng,
          title: name,
          icon: 'icons/beer.png'
      })
  }
};

// MarkerViewModel();
  markerDisplay();
ko.applyBindings(new MarkerViewModel());


}(window, google));
