var input1 = document.getElementById("color1");
var input2 = document.getElementById("color2");
var h3 = document.getElementsByTagName("h3")[0];
var body = document.querySelector("body");
var button = document.getElementById("random");

function addGradient(){
	body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
	h3.textContent = body.style.background + ";";
}

function randomRGB(){
	var arr = [];
	arr[0] = Math.floor(Math.random()* 255 + 1);
	arr[1] = Math.floor(Math.random()* 255 + 1);
	arr[2] = Math.floor(Math.random()* 255 + 1);
	return arr;
}

function randomGradient(){
	
}

input1.addEventListener("input", addGradient);

input2.addEventListener("input", addGradient);

window.addEventListener("load", addGradient);

button.addEventListener("click", function(){
	var firstRGB = randomRGB();
	var secondRGB = randomRGB();
	var num1 = firstRGB[0].toString();
	var num2 = firstRGB[1].toString();
	var num3 = firstRGB[2].toString();
	var num4 = secondRGB[0].toString();
	var num5 = secondRGB[1].toString();
	var num6 = secondRGB[2].toString();
	body.style.background = "linear-gradient(to right, rgb(" + num1 + ", " + num2 + ", " + num3 + "), rgb("+ num4 + ", " + num5 + ", " + num6 + "))";
});