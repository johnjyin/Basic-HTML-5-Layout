/* Refer to : 
 * http://stackoverflow.com/questions/15490859/nested-elements-hover-handle
 * http://jsfiddle.net/5yQY5/ 
 */

/* add information icon to all Div */
function addInfoIcon () {
	var arrDivs = document.getElementsByTagName('div');
	for (var i=0; i<arrDivs.length; i++ ) {
		var divItem = arrDivs[i];
		/* create icon box at corner */
		divItem.innerHTML = divItem.innerHTML + '<span class="info-icon"></span>';
	}
 }

/* to show div style */
function addClickListener() {
	/* add on click listener for each information icon */
	var arrInfoIcons = document.getElementsByClassName('info-icon');
	for (var i=0; i<arrInfoIcons.length; i++ ) {
		if ( arrInfoIcons[i].addEventListener ) {
			arrInfoIcons[i].addEventListener( 'click', function(evt) { showStyle(evt); }, false );
		} else if ( arrInfoIcons[i].attachEvent ) { // IE < 9 :(
			arrInfoIcons[i].attachEvent( 'click', function(evt) { showStyle(evt); }, false );
		}
	}
}

/* show styles */
function showStyle(evt) {
	alert( getStyle(evt.target) );
}

/* read div's styles */
function getStyle(elm) {
	/* read all style class from StyleSheets */
	var docClasses = document.styleSheets[0].rules || document.styleSheets[0].cssRules;	
	/* get the parent's div and style classes from class attribute */
	parentClasses = elm.parentNode.getAttribute('class').split(' ');
	parentClassContent = ''; // '<div class="info-box">';
	for (var i=0; i<parentClasses.length; i++) {
		for (var j=0; j<docClasses.length; j++) {
			if ( '.' + parentClasses[i] == docClasses[j].selectorText ) {
				parentClassContent += ( (docClasses[j].cssText) ? (docClasses[j].cssText) : (docClasses[j].style.cssText) ) + '\r\n';
				break;
			}
		}
	}
	return parentClassContent;
}

window.onload = function () {
	addInfoIcon();
	addClickListener();
}