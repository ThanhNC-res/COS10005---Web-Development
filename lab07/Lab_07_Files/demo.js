// JavaScript Document
"use strict";
function changeRed () {
	var red = document.getElementById("red");
	red.style.backgroundColor = "rgb(255,0,0)";
}
function changeYellow () {
	var yellow = document.getElementById("yellow");
	yellow.style.backgroundColor = "rgb(255,255,161)";
}
function changeGreen () {
	var green = document.getElementById("green");
	green.style.backgroundColor = "rgb(0,255,0)";
}
function offRed() {
	var red = document.getElementById("red");
	red.style.backgroundColor = "white";
}

function init () {
	var red = document.getElementById("red");
	var yellow = document.getElementById("yellow");
	var green = document.getElementById("green");
	red.onmouseover=changeRed;
	red.onmouseout=offRed;
	yellow.onmouseover=changeYellow;
	
	green.onmouseover=changeGreen;
}

window.onload = init;
