function initMap() {
    var location = {lat: 55.72684, lng: 9.9517659};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}