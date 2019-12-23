
      // This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

function initMap() {
  var uluru = {lat: 41.885, lng: 12.511};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: uluru
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Kerala Restuarant Rome</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Kerala</b>, Via la Spezia, 10/B, 00182 Roma RM, Italy</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  infowindow.open(map, marker);
};
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1iCAed3rttH-C9cicdvBMUStvbir6lMU&callback=initMap"
    async defer></script>