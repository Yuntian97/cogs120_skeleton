'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */

function initializePage() {
	//console.log("Javascript connected!");
	$('.pageEnd #2').click(nextClick);
}

function nextClick() {
    //var thisId = readNextID();
    //readNextID();
    var thisTitle = document.getElementById('titleBar').value;
    var thisContent = $('.Textbox #goodBox').val();
    //console.log(thisId);
    console.log(thisTitle);
    console.log(thisContent);
}

function readNextID() {
    //var r = new FileReader()
    //var json = JSON.parse(test);
    //console.log(json);
}
