var map = L.map('map').setView([35, 0], 1);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onMapClick(e) {
    document.getElementById("map").style.display = "none";
    document.getElementById("address").innerHTML = "Address: (" + e.latlng.lat  + ", " +  e.latlng.lng + ") <br>";
}

function showMap() {
    document.getElementById("map").style.display = "block";
}

map.on('click', onMapClick);