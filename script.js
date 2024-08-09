let outdoor_btn = document.getElementById('outdoor-button');
let indoor_btn = document.getElementById('indoor-button');


function goToMap() {
    window.location.href = "./index.html#orange-box";
}

new google.maps.Map(document.getElementById("map-iframe"), {
    zoom,
    center,
    gestureHandling: "none",
    zoomControl: false,
  });


function indoorClicked() {
    indoor_btn.style.backgroundColor = 'black';
    indoor_btn.style.color = 'white'
    outdoor_btn.style.backgroundColor = 'white';
    outdoor_btn.style.color = 'black';
}

function outdoorClicked() {
    outdoor_btn.style.backgroundColor = 'black';
    outdoor_btn.style.color = 'white'
    indoor_btn.style.backgroundColor = 'white';
    indoor_btn.style.color = 'black';
   
}