///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'mgelfort.fb229a36'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoibWdlbGZvcnQiLCJhIjoiZ2dRb1NMUSJ9.hqy1XD7_uiAGv9XjBcoLXQ'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

var dataFileToAdd = 'data/DC_parks.geojson';

var featureLayer = L.mapbox.featureLayer().loadURL(dataFileToAdd).addTo(map)

featureLayer.on('ready',function(){
  this.setStyle({
    'color':'#ec008c',
    'fillColor':'#ec008c',
    'weight':4,
    'opacity':.7
  });
  map.fitBounds(featureLayer.getBounds());
});

featureLayer.on('ready',function(){
  this.eachLayer(function(layer){
    layer.bindPopup('Hi, this park is called ' + layer.feature.properties.NAME);
  });
});

var dataFileToAdd = 'data/historic_sites.geojson';

var featureLayer = L.mapbox.featureLayer().loadURL(dataFileToAdd).addTo(map)

featureLayer.on('ready',function(){
  this.setStyle({
    'color':'#ec008c',
    'fillColor':'#ec008c',
    'weight':4,
    'opacity':.7
  });
  map.fitBounds(featureLayer.getBounds());
});
