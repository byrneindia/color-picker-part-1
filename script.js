window.onload = function () {
	initColorPicker();
}
function initColorPicker() {
	let colorBox =document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue"),
	};
	let colorPickers=document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
}
function setColorPickerEventListeners(element,colors,pickerElements) {
	let pickerLen = pickerElements.length;
	for(let i = 0; i < pickerElements.length; i++) {
		pickerElements[i].addEventListener('change', () => {
			let red = colors.red.value;
			let green = colors.green.value;
			let blue= colors.blue.value;
			setElementBGcolor( bgElement, red, green, blue);
			setDisplayValues(red, green, blue)
		});
	}
}
function setElementBGcolor (bqElement, red, green, blue) {
	rgbVal = [red, green, blue].join(',');
	bgelements.style.backgroundColor = "rgbVal(" + rgbVal + ")";
}
function setDisplayValues (red, green, blue)  {
	let redVal = document.getElementById("redVal");
	let greenVal = document.getElementById("greenVal");
	let blueVal = document.getElementById("blueVal");

	redVal.innerText = red;
	greenVal.innertext = green;
	blueVal.innerText = blue;
}