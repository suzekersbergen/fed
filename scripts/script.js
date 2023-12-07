// JavaScript Document
console.log("hi");

var openmenu = document.querySelector("nav > button");
openmenu.onclick = openMenu;

function openMenu() {
    document.querySelector("body").classList.add("menuIsOpen");

    
}



var sluitmenu = document.querySelector("li button");
sluitmenu.onclick = closeMenu;

function closeMenu() {
    document.querySelector("body").classList.remove("menuIsOpen");
}

/* animatie */

let aantalItems = 0; // Definieer aantalItems hier

// Zoek de knop "In winkelmandje" op basis van het ID-attribuut
const inWinkelmandjeKnop = document.getElementById('inWinkelmandButton');

// Voeg een eventlistener toe voor klikgebeurtenissen op de winkelwagenknop
inWinkelmandjeKnop.addEventListener('click', function(event) {
    event.preventDefault(); // Voorkom standaardgedrag van de knop

    // Verhoog het aantal items in het winkelwagentje
    aantalItems++;
    
    // Update het weergave van het aantal items
    updateWinkelwagenBadge();
});

// Functie om het aantal items in de winkelwagen bij te werken
function updateWinkelwagenBadge() {
    const winkelwagenAantal = document.getElementById('winkelwagenAantal');
    winkelwagenAantal.textContent = aantalItems; // Bijwerken van het aantal items
    winkelwagenAantal.style.display = 'inline-block'; // Zorg ervoor dat het zichtbaar wordt
}


