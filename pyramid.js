let symbolHolder = $('#symbol');
let heigthHolder = $('#heigth');

drawPyramid();

symbolHolder.change(drawPyramid);
heigthHolder.change(drawPyramid);


function drawPyramid() {    
	// remove all children elements
    let workingBlock = $("#construction");
    workingBlock.find('*').remove();


    let height = $( 'input[type="range"]' ).val();
    

    for (var i = 1; i <= height; i++) {
        let paragraf = $('<p></p>');
        paragraf.appendTo($('#construction'));

        for (var k = height - i; k > 0; k--) {
            let space = $('<span class="transparent"></span>');
            space.appendTo(paragraf);
        }

        for (var j = 0; j < i + 1; j++) {
            let symbol = $('<span>' +  $('select').val() + '</span>');
            symbol.appendTo(paragraf);
        }
    }
}