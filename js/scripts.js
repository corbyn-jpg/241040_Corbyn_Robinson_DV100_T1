//Functionalise the filter bar
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resultsPerPage").addEventListener("change", function() {
        var selectedValue = parseInt(this.value);
        console.log("Results Per Page:", selectedValue);
        updateResultsPerPage(selectedValue);
    });

    // Event listener for changes in the sorting option selection
    document.getElementById("sortBy").addEventListener("change", function() {
        var selectedValue = this.value;
        console.log("Sort By:", selectedValue);
        updateSortLayout(selectedValue);
    });

    // Function to update the number of results displayed per page
    function updateResultsPerPage(numPerPage) {
        var planets = document.querySelectorAll(".available > .planetPurple, .available > .planetBlue");
        planets.forEach(function(planet, index) {
            if (index < numPerPage) {
                planet.style.display = "";
            } else {
                planet.style.display = "none";
            }
        });
    }

    // Array to store the original order of planets
    var originalOrder = Array.from(document.querySelectorAll('.planetPurple, .planetBlue'));

    // Function to reset the layout to the original order
    function resetLayout() {
        var availableSection = document.querySelector('.available');
        availableSection.innerHTML = ''; // Clear the existing content
        originalOrder.forEach(function(planet) {
            availableSection.appendChild(planet);
        });
    }

    // Function to update the layout based on the selected sorting option
    function updateSortLayout(sortOption) {
        var sortedPlanets;
        if (sortOption === 'default') {
            resetLayout();
            return;
        }
        var planets = document.querySelectorAll('.planetPurple, .planetBlue');
        planets = Array.from(planets);
        switch (sortOption) {
            case 'priceLowToHigh':
                sortedPlanets = planets.sort(function(a, b) {
                    var priceA = parseFloat(a.querySelector('.availableText h3').innerText.replace(/[^\d.-]/g, ''));
                    var priceB = parseFloat(b.querySelector('.availableText h3').innerText.replace(/[^\d.-]/g, ''));
                    return priceA - priceB;
                });
                break;
            case 'priceHighToLow':
                sortedPlanets = planets.sort(function(a, b) {
                    var priceA = parseFloat(a.querySelector('.availableText h3').innerText.replace(/[^\d.-]/g, ''));
                    var priceB = parseFloat(b.querySelector('.availableText h3').innerText.replace(/[^\d.-]/g, ''));
                    return priceB - priceA;
                });
                break;
            case 'dateNewestFirst':
                sortedPlanets = planets.sort(function(a, b) {
                    var dateA = new Date(parseDate(a.querySelector('.availableText p:last-of-type').innerText));
                    var dateB = new Date(parseDate(b.querySelector('.availableText p:last-of-type').innerText));
                    return dateA - dateB;
                });
                break;
            case 'dateOldestFirst':
                sortedPlanets = planets.sort(function(a, b) {
                    var dateA = new Date(parseDate(b.querySelector('.availableText p:last-of-type').innerText));
                    var dateB = new Date(parseDate(a.querySelector('.availableText p:last-of-type').innerText));
                    return dateA - dateB;
                });
                break;
            default:
                sortedPlanets = planets;
        }
        var availableSection = document.querySelector('.available');
        availableSection.innerHTML = '';
        sortedPlanets.forEach(function(planet) {
            availableSection.appendChild(planet);
        });
    }

    // Function to parse date from a string
    function parseDate(dateString) {
        var dates = dateString.split(' - ');
        return dates[1];
    }
});


//Plus/minus button code
function decreasesMars(){
    if(document.getElementById('marsTickets').value != 0){
        document.getElementById('marsTickets').value = parseInt(document.getElementById('marsTickets').value) - 1;
    }else{
        document.getElementById('marsTickets').value = 0;
    }
}

function increasesMars(){
    document.getElementById('marsTickets').value = parseInt(document.getElementById('marsTickets').value) + 1;
}

function decreasesNeptune(){
    if(document.getElementById('neptuneTickets').value != 0){
        document.getElementById('neptuneTickets').value = parseInt(document.getElementById('neptuneTickets').value) - 1;
    }else{
        document.getElementById('neptuneTickets').value = 0;
    }
}

function increasesNeptune(){
    document.getElementById('neptuneTickets').value = parseInt(document.getElementById('neptuneTickets').value) + 1;
}

function decreasesJupiter(){
    if(document.getElementById('jupiterTickets').value != 0){
        document.getElementById('jupiterTickets').value = parseInt(document.getElementById('jupiterTickets').value) - 1;
    }else{
        document.getElementById('jupiterTickets').value = 0;
    }
}

function increasesJupiter(){
    document.getElementById('jupiterTickets').value = parseInt(document.getElementById('jupiterTickets').value) + 1;
}

function decreasesSaturn(){
    if(document.getElementById('saturnTickets').value != 0){
        document.getElementById('saturnTickets').value = parseInt(document.getElementById('saturnTickets').value) - 1;
    }else{
        document.getElementById('saturnTickets').value = 0;
    }
}

function increasesSaturn(){
    document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) + 1;
}

function decreasesUranus(){
    if(document.getElementById('uranusTickets').value != 0){
        document.getElementById('uranusTickets').value = parseInt(document.getElementById('uranusTickets').value) - 1;
    }else{
        document.getElementById('uranusTickets').value = 0;
    }
}

function increasesUranus(){
    document.getElementById('uranusTickets').value = parseInt(document.getElementById('uranusTickets').value) + 1;
}

function decreasesMoon(){
    if(document.getElementById('moonTickets').value != 0){
        document.getElementById('moonTickets').value = parseInt(document.getElementById('moonTickets').value) - 1;
    }else{
        document.getElementById('moonTickets').value = 0;
    }
}

function increasesMoon(){
    document.getElementById('moonTickets').value = parseInt(document.getElementById('moonTickets').value) + 1;
}

//Total cost code
let totalMarsCost = 0;
let totalNeptuneCost = 0;
let totalJupiterCost = 0;
let totalSaturnCost = 0;
let totalUranusCost = 0;
let totalMoonCost = 0;
let totalCost = 0;

function total(){
    totalMarsCost = parseInt(document.getElementById('marsTickets').value) * 50000;
    totalNeptuneCost = parseInt(document.getElementById('neptuneTickets').value) * 45000;
    totalJupiterCost = parseInt(document.getElementById('jupiterTickets').value) * 65000;
    totalSaturnCost = parseInt(document.getElementById('saturnTickets').value) * 40000;
    totalUranusCost = parseInt(document.getElementById('uranusTickets').value) * 50000;
    totalMoonCost = parseInt(document.getElementById('moonTickets').value) * 15000;
    totalCost = totalMarsCost + totalNeptuneCost + totalJupiterCost + totalSaturnCost + totalUranusCost + totalMoonCost;
    console.log(totalCost);

    const modalBody = document.getElementById('cartModalBody');
    modalBody.innerHTML = `
        <div>
            <p>Mars: <span>${totalMarsCost}</span></p>
            <input type="number" id="marsModalInput" value="${parseInt(document.getElementById('marsTickets').value)}" min="0" max="30" onchange="updateTicketInput('mars', this.value)">
        </div>
        <br/>
        <div>
            <p>Neptune: <span>${totalNeptuneCost}</span></p>
            <input type="number" id="neptuneModalInput" value="${parseInt(document.getElementById('neptuneTickets').value)}" min="0" max="30" onchange="updateTicketInput('neptune', this.value)">
        </div>
        <br/>
        <div>
            <p>Jupiter: <span>${totalJupiterCost}</span></p>
            <input type="number" id="jupiterModalInput" value="${parseInt(document.getElementById('jupiterTickets').value)}" min="0" max="30" onchange="updateTicketInput('jupiter', this.value)">
        </div>
        <br/>
        <div>
            <p>Saturn: <span>${totalSaturnCost}</span></p>
            <input type="number" id="saturnModalInput" value="${parseInt(document.getElementById('saturnTickets').value)}" min="0" max="30" onchange="updateTicketInput('saturn', this.value)">
        </div>
        <br/>
        <div>
            <p>Uranus: <span>${totalUranusCost}</span></p>
            <input type="number" id="uranusModalInput" value="${parseInt(document.getElementById('uranusTickets').value)}" min="0" max="30" onchange="updateTicketInput('uranus', this.value)">
        </div>
        <br/>
        <div>
            <p>Moon: <span>${totalMoonCost}</span></p>
            <input type="number" id="moonModalInput" value="${parseInt(document.getElementById('moonTickets').value)}" min="0" max="30" onchange="updateTicketInput('moon', this.value)">
        </div>
        <br/>
        <div><p>Total: $ ${totalCost}</p></div>
    `;
}

function updateModalInputs() {
    document.getElementById('marsModalInput').value = parseInt(document.getElementById('marsTickets').value);
    document.getElementById('neptuneModalInput').value = parseInt(document.getElementById('neptuneTickets').value);
    document.getElementById('jupiterModalInput').value = parseInt(document.getElementById('jupiterTickets').value);
    document.getElementById('saturnModalInput').value = parseInt(document.getElementById('saturnTickets').value);
    document.getElementById('uranusModalInput').value = parseInt(document.getElementById('uranusTickets').value);
    document.getElementById('moonModalInput').value = parseInt(document.getElementById('moonTickets').value);
    total();
}

function updateTicketInput(planet, value) {
    document.getElementById(`${planet}Tickets`).value = value;
    total();
}

// Open Cart Modal
function openCartModal() {
    total();
    var myModal = new bootstrap.Modal(document.getElementById('cartModal'), {
        keyboard: false
    });
    myModal.show();
}

// Checkout function (for the "Checkout" button)
function checkout() {
    window.location.href = "../index.html";
}

const imagePaths = [
    "../assets/Images/flighhtMars.png",
    "../assets/Images/flightNeptune.png",
    "../assets/Images/flightJupiter.png",
    "../assets/Images/flightSaturn.png",
    "../assets/Images/flightUranus.png",
    "../assets/Images/flightMoon.png"
];

// Function loads images dynamically
function loadImages() {
    const pictureContainers = document.querySelectorAll(".pictureContainer img");

    pictureContainers.forEach((img, index) => {
        img.src = imagePaths[index];
    });
}

// Calls the function
document.addEventListener("DOMContentLoaded", loadImages);