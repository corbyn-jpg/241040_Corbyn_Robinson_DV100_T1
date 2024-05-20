//Functionalise the filter bar
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resultsPerPage").addEventListener("change", function() {
        var selectedValue = parseInt(this.value);
        console.log("Results Per Page:", selectedValue);
        updateResultsPerPage(selectedValue);
    });

    document.getElementById("sortBy").addEventListener("change", function() {
        var selectedValue = this.value;
        console.log("Sort By:", selectedValue);
        updateSortLayout(selectedValue);
    });

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

var originalOrder = Array.from(document.querySelectorAll('.planetPurple, .planetBlue'));

function resetLayout() {
    var availableSection = document.querySelector('.available');
    availableSection.innerHTML = ''; // Clear the existing content
    originalOrder.forEach(function(planet) {
        availableSection.appendChild(planet);
    });
}

var originalOrder = Array.from(document.querySelectorAll('.planetPurple, .planetBlue'));

function resetLayout() {
    var availableSection = document.querySelector('.available');
    availableSection.innerHTML = '';
    originalOrder.forEach(function(planet) {
        availableSection.appendChild(planet);
    });
}

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

function parseDate(dateString) {
    var dates = dateString.split(' - ');
    return dates[1];
}
});


//Plus/minus button code
document.addEventListener("DOMContentLoaded", function() {
    const numberContainers = document.querySelectorAll('.number');
    
    numberContainers.forEach(container => {
        const numberInput = container.querySelector('input[type="text"]');
        const minusBtn = container.querySelector('.btn.minus');
        const plusBtn = container.querySelector('.btn.plus');
        
        minusBtn.addEventListener("click", function() {
            let currentValue = parseInt(numberInput.value);
            if (currentValue > 0) {
                numberInput.value = currentValue - 1;
                plusBtn.removeAttribute("disabled");
            }
            if (currentValue === 1) {
                this.setAttribute("disabled", "disabled");
            }
        });
        
        plusBtn.addEventListener("click", function() {
            let currentValue = parseInt(numberInput.value);
            if (currentValue < parseInt(numberInput.max)) {
                numberInput.value = currentValue + 1;
                minusBtn.removeAttribute("disabled");
            }
            if (currentValue === parseInt(numberInput.max) - 1) {
                this.setAttribute("disabled", "disabled");
            }
        });
    });
});

