/* Refer to : 
 * http://stackoverflow.com/questions/15490859/nested-elements-hover-handle
 * http://jsfiddle.net/5yQY5/ 
 */

/* to show block style */
window.onload = function () {

	var arrDivs = document.getElementsByTagName('div');
	for (var i=0; i<arrDivs.length; i++ ) {
		var divItem = arrDivs[i];
		/* create icon box at corner */
		divItem.innerHTML = divItem.innerHTML + '<span class="info-icon" onclick="getStyle(this)"></span>';
	}

}

function getStyle (elm) {
	
	/* read and display div block styles */
	var docClasses = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
			
	/* get its parent div */
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
	
	alert( parentClassContent );
	
	return true;
}
