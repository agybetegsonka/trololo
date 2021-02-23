var helyes = document.getElementById('helyes');
var helyes1 = document.getElementById('helyes1');
var helyes2 = document.getElementById('helyes2');
var helyes3 = document.getElementById('helyes3');
var helyes4 = document.getElementById('helyes4');
var helyes5 = document.getElementById('helyes5');
var helyes6 = document.getElementById('helyes6');
var helyes7 = document.getElementById('helyes7');
var helyes8 = document.getElementById('helyes8');
var helyes9 = document.getElementById('helyes9');
var helyes10 = document.getElementById('helyes10');

var hidden1 = document.getElementById('hidden1');
var hidden2 = document.getElementById('hidden2');
var hidden3 = document.getElementById('hidden3');
var hidden4 = document.getElementById('hidden4');
var hidden5 = document.getElementById('hidden5');
var hidden6 = document.getElementById('hidden6');
var hidden7 = document.getElementById('hidden7');
var hidden8 = document.getElementById('hidden8');
var hidden9 = document.getElementById('hidden9');
var hidden10 = document.getElementById('hidden10');

//Gomb megjelenítés

helyes.onclick = function() {
    hidden1.classList.remove("hidden1");
}

helyes1.onclick = function() {
    hidden2.classList.remove("hidden2");
}

helyes2.onclick = function() {
    hidden3.classList.remove("hidden3");
}

helyes3.onclick = function() {
    hidden4.classList.remove("hidden4");
}

helyes4.onclick = function() {
    hidden5.classList.remove("hidden5");
}

helyes5.onclick = function() {
    hidden6.classList.remove("hidden6");
}

helyes6.onclick = function() {
    hidden7.classList.remove("hidden7");
}

helyes7.onclick = function() {
    hidden8.classList.remove("hidden8");
}

helyes8.onclick = function() {
    hidden9.classList.remove("hidden9");
}

helyes9.onclick = function() {
    hidden10.classList.remove("hidden10");
}

// Visszaugrás punishment

var vissza1 = document.getElementById('vissza1');
var vissza2 = document.getElementById('vissza2');
var vissza3 = document.getElementById('vissza3');
var vissza4 = document.getElementById('vissza4');
var vissza5 = document.getElementById('vissza5');

vissza1.onclick = function() {
    hidden5.classList.add("hidden5");
}
vissza2.onclick = function() {
    hidden5.classList.add("hidden5");
}
vissza3.onclick = function() {
    hidden5.classList.add("hidden5");
}
vissza4.onclick = function() {
    hidden6.classList.add("hidden6");
}
vissza5.onclick = function() {
    hidden6.classList.add("hidden6");
}

//Képek megjelenítése 

document.getElementById('hiddenImg1').onclick = function() {
    document.getElementById('hiddenImg11').classList.remove("hiddenImg1");
    hidden6.classList.add("hidden6");
}
document.getElementById('hiddenImg2').onclick = function() {
    document.getElementById('hiddenImg22').classList.remove("hiddenImg2");
    hidden6.classList.add("hidden6");
}
document.getElementById('hiddenImg3').onclick = function() {
    document.getElementById('hiddenImg33').classList.remove("hiddenImg3");
    hidden6.classList.add("hidden6");
}
