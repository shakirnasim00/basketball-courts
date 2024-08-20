let outdoor_btn = document.getElementById('outdoor-button');
let indoor_btn = document.getElementById('indoor-button');
const gymMenu = document.querySelector(".mobile-dropdown-content-1")
const outdoorMenu = document.querySelector(".mobile-dropdown-content-2")

displayDate();


function goToMap() {
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

function goToCourts() {
    const gymContainer = document.querySelector('.gyms-container');
    if (gymContainer) {
        gymContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

new google.maps.Map(document.getElementById("map-iframe"), {
    zoom,
    center,
    gestureHandling: "none",
    zoomControl: false,
  });

  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function MenuShowGyms() {
    

    if (gymMenu.style.display === 'flex') {
        gymMenu.style.display = 'none'; //Hides sub-menu
    } else {
        gymMenu.style.display = 'flex'; //Shows the sub-menu
    }  
    
    outdoorMenu.style.display = 'none'; //closes other menu
}

function MenuShowOutdoor() {

    if (outdoorMenu.style.display === 'flex') {
        outdoorMenu.style.display = 'none'; //Hides sub-menu
    } else {
        outdoorMenu.style.display = 'flex'; //Shows the sub-menu
    }    

    gymMenu.style.display = 'none'; //closes other submenu
}


function indoorClicked() {
    indoor_btn.style.backgroundColor = 'black';
    indoor_btn.style.color = 'white'
    outdoor_btn.style.backgroundColor = 'white';
    outdoor_btn.style.color = 'black';

    document.getElementById('pise').innerHTML = "Pise"
        document.getElementById('pise-address').innerHTML = "4371 Interurban Rd, Victoria, BC V9E 2C5"
        var image1 = document.getElementById('pise-img');
        image1.src = './resources/pise-gym.jpg';

    document.getElementById('naden').innerHTML = "Naden"
        document.getElementById('naden-address').innerHTML = "88 Frewer St, Victoria, BC V9A 6N7"
        var image2 = document.getElementById('naden-img');
            image2.src = './resources/naden.jpeg';

    document.getElementById('carsa').innerHTML = "Carsa"
        document.getElementById('carsa-address').innerHTML = "Gabriola Rd, Saanich, BC V8P 5C2"
        var image3 = document.getElementById('carsa-img');
            image3.src = './resources/Carsa-gym.jpg';

    document.getElementById('rr').innerHTML = "Royal Roads"
        document.getElementById('rr-address').innerHTML = "2005 Sooke Rd, Victoria, BC V9B 5Y2"
        var image4 = document.getElementById('rr-img');
            image4.src = './resources/royal-roads-court.jpg';
}

function outdoorClicked() {
    outdoor_btn.style.backgroundColor = 'black';
    outdoor_btn.style.color = 'white'
    indoor_btn.style.backgroundColor = 'white';
    indoor_btn.style.color = 'black';

    document.getElementById('pise').innerHTML = "Crystal Pool"
        document.getElementById('pise-address').innerHTML = "2275 Quadra St, Victoria, BC V8T 4C4"
        var image1 = document.getElementById('pise-img');
        image1.src = './resources/nash-court.jpg';

    document.getElementById('naden').innerHTML = "Vic West"
        document.getElementById('naden-address').innerHTML = "250 Esquimalt Rd, Victoria, BC V9A 3K9"
        var image2 = document.getElementById('naden-img');
            image2.src = './resources/vic-west.webp';

    document.getElementById('carsa').innerHTML = "JDF"
        document.getElementById('carsa-address').innerHTML = "1767 Island Hwy, Victoria, BC V9B 1J1"
        var image3 = document.getElementById('carsa-img');
            image3.src = './resources/jdf.png';

    document.getElementById('rr').innerHTML = "Panorama"
        document.getElementById('rr-address').innerHTML = "1885 Forest Park Dr, North Saanich, BC V8L 4A3"
        var image4 = document.getElementById('rr-img');
            image4.src = './resources/panorama.png';
   
}

function goToReview() { 
    window.location.href = "./review.html"
}


function displayDate() { //Displays date on form
    const today = new Date();

    let formattedDate = today.toLocaleDateString();

    document.getElementById("date").innerHTML = formattedDate;

} 