// blank grey square
var mymap = L.map('mapid').setView([1.134683, 104.025593], 13);
// end blank grey square

// googlemaps view
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets', //try change to 'mapbox.satellite' if you want satellite view
  accessToken: 'pk.eyJ1IjoiY3Jpc3RpbmFzaHV3IiwiYSI6ImNqbTh4Z204ejA3aGszd25ucHF1Y2Nnam8ifQ.jQfziSVlnniC-6WrnGJzPQ' // include accessToken (https://www.mapbox.com/account/access-tokens/)
}).addTo(mymap);
// end google maps view

// marker start
var obean = L.marker([1.133706, 104.034231]).addTo(mymap);
var sweet = L.marker([1.130622, 104.035382]).addTo(mymap);
var chengxin = L.marker([1.136206, 104.013780]).addTo(mymap);
var joyful = L.marker([1.135173, 104.009448]).addTo(mymap);
var deloving = L.marker([1.134048, 104.009529]).addTo(mymap);
var nature = L.marker([1.127249, 104.006167]).addTo(mymap);
var simple = L.marker([1.131787, 104.007927]).addTo(mymap);
var skytastes = L.marker([1.127270, 104.006199]).addTo(mymap);
var meixiang = L.marker([1.133669, 104.033794]).addTo(mymap);
// marker end

// circle start ()
var circle = L.circle([1.151518, 104.013226], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
// circle end

// polygon start
var polygon = L.polygon([
  [1.129791, 103.924656],
  [1.133041, 103.927917],
  [1.133041, 103.935986],
  [1.130049, 103.939247],
  [1.12446, 103.939934],
  [1.120169, 103.936329],
  [1.124632, 103.924999]
]).addTo(mymap);
// polygon end

// popup start
  // obean
  obean.bindPopup("<img src='https://3.bp.blogspot.com/-6C259_oAL90/WKR7k1XdXYI/AAAAAAAAR0E/F9pFr6xlMwgFDdlqph1R6sljuKYj5VSQACLcB/s1600/IMG_0025.jpg' style='max-width: 150px;'><br><b>Recommended!</b><br>Obean Vegetarian Restaurant.").openPopup();
  // sweet veggie
  sweet.bindPopup("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vw34_qhHJxVFA6X5JXtbOpPLVaXKQLOhxvg2kY7GeuVqxxQVfQ' style='max-width: 150px;'><br><b>Sweet Veggie</b> <br> Vegetarian Cafe",{minWidth : 150});
  // chengxin wellness
  chengxin.bindPopup("<img src='https://vegyuan.files.wordpress.com/2017/05/stall.jpeg?w=640' style='max-width: 140px;'><br><b>Cheng Xin Wellness</b> <br> Vegetarian Restaurant",{minWidth : 150});
  // joyful vegetarian
  joyful.bindPopup("<img src='https://kulinervegetarian.files.wordpress.com/2017/04/img_0461.jpg?w=656' style='max-width: 140px;'><br>Joyful Vegetarian",{minWidth : 150});
  // deloving life 
  deloving.bindPopup("<img src='https://media-cdn.tripadvisor.com/media/photo-s/09/74/89/45/de-loving-hut.jpg' style='max-width: 140px;'><br><b>Recommended!</b> <br>De Loving Heart <br> Vegan Cafe & Bistro",{minWidth : 150});
  // nature
  nature.bindPopup("<img src='https://lh5.googleusercontent.com/p/AF1QipO5aRfzAeDWwT7nz-3XIoI9-Bn5xsu_jsYteoBa=w408-h306-k-no' style='max-width: 140px;'><br><b>Restaurant Nature</b> <br> Vegetarian",{maxWidth : 150});
  // simple life
  simple.bindPopup("<img src='https://lh5.googleusercontent.com/p/AF1QipMuMmuHx0C8IL1xGBAGb0hfQAksm06l3XByZQqY=w408-h306-k-no' style='max-width: 140px;'><br><b>Simple Life</b><br> Vegetarian Restaurant",{minWidth : 150});
  // sky tastes cuisine
  skytastes.bindPopup("<img src='https://vegyuan.files.wordpress.com/2018/04/dsc9048.jpg?w=1200' style='max-width: 160px;'><br><b>Recommended!</b><br>Sky Tastes Vegetarian Cuisine",{minWidth : 100});
  // Mei Xiang
  meixiang.bindPopup("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8hy3fjmuNg26bsdn1BdTkoiZoSqrLmhpvohiRp3l43jSE8GHEWA' style='max-width: 110px;'><br><br><b>Mei Xiang</b> Vegetarian",{minWidth : 80});

  // hotel Amaris
  circle.bindPopup("Our <b>1st kickoff meeting</b> place. <br> Hotel Amaris");

  // sekupang area
  polygon.bindPopup("This is Sekupang area.");
// popup end

// immediately popup (automatic closing previous popups)
// var popup = L.popup()
// .setLatLng([51.5, -0.09])
// .setContent("I am a standalone popup.")
// .openOn(mymap);
// end immediately popup

// alert function
function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);
// end alert

// popup information (rather than alert)
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
// end popup info