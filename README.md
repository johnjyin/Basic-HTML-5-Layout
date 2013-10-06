Basic-HTML-5-Layout
===================

Hand write clean code of one basic HTML 5 Basic Layout!

Please click <a href="" target="_blank"> <b> here </b> </a>to see the online demo.

<img width="70%" src="Basic-Html5-Layout.jpg"> <br>
<img width="30%" src="Basic-Html5-Layout(mobile).jpg">

<p>One of the MOST tricky things working with nested floats is how we solve the Collapsed Container.</p>
<img width="70%" src="Basic-Html5-Layout-collapsed-container.jpg"> </img>

In our code, we have three following solutions seperately:</p>
- MANUALLY DIV METHOD is to manually append one empty div at the end of the last children div : <div style="clear: both;"></div>
- PSEODU DIV METHOD is use CSS Pseudo selector (:after) to automatically insert one empty div at the end of the last children div
- OVERFLOW METHOD is to set container's overflow attribute as 'auto' or 'hidden'

Details discussion please refer to CSS Guru's articles:
- <a href="http://css-tricks.com/all-about-floats/" target="_blank">All About Floats</a>
- <a href="http://www.positioniseverything.net/easyclearing.html" target="_blank">How To Clear Floats Without Structural Markup</a>
