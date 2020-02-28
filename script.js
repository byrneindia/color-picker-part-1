window.onload = function () {
	initColorPicker();
}
function initColorPicker() {
	let colorBox =document.getElementByd("color box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue"),
	};
	let colorPickers=document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
}
function setColorPickerEventListeners(colorBox, rgb, pictureElements) {
	let pickerLen = pickerElements.lenght;
	for(let i = 0; i < pickerelements.length; i++) {
		pickerelements [i]. addEventListener('change', () => {
			let red = colors.red.value;
			let green = colors.green.value;
			let blue= colors.blue.value;
			setBoxBGColor(element, red, green, blue);
			setDisplayValues (red, green, blue);
		});
	}
}
function setBoxBGColor(colorBox, red, green, blue) {
	rbgVal = [red, green, blue].join(',');
	colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
}

function setElementBGColor (bgElement, red, green, blue) {
	let redVal = document.getElementById("redVal");
	let greenVal = document.getElementById("greebVal");
	let blueVal = document.getElementById("blueVal");
	setDisplayValues(red, green, blue);
	redVal.innerText = red;
	greenVal.innertext = green;
	blueVal.innerText = blue;
}