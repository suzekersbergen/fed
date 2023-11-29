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

