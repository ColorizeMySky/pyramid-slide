let symbolHolder = document.querySelector('#symbol');
let heigthHolder = document.querySelector('#heigth');

drawPyramid();

function drawPyramid() {
	// remove all children elements
	let placeForDraw = document.querySelector('#construction');	
	while (placeForDraw.firstChild) {
		placeForDraw.removeChild(placeForDraw.firstChild);
	}
	
	let heigth = heigthHolder.value;	
	let symbol = symbolHolder[symbolHolder.selectedIndex].value;
	let strDraw = symbol;

	for (var i = 1; i <= heigth; i++) {
    	var space = '';
    	for (var j = heigth - i - 1; j >= 0; j--) {
    		space += ' ';
    	}
    	strDraw += symbol;

    	let paragraf = document.createElement('p');
    	placeForDraw.appendChild(paragraf);
    	paragraf.innerHTML = space + strDraw;
    }

    symbolHolder.addEventListener("change", drawPyramid);
    heigthHolder.addEventListener("change", drawPyramid);
}