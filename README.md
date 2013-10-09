Basic-HTML-5-Layout
===================

This Repo is about the secrets of structuring one HTML 5 Basic Layout!
<br />Notes: it's about how framing the page, not polishing. We know, in production, all these framing Divs would be hidden with 0 margin and padding, and no border and background.

Please click <a href="http://demo.ebizdesigner.com/html5/html5layout.html" target="_blank"> <b> here </b> </a>to see the online demo.

Up to now, there are THERE way to frame one basic HTML 5 Layout (if you have any other methods, please Fork me)!
- Left Floating Divs
- CSS 3 Box-Sizing
- CSS 3 Flex Box

We could find the Flex Box would be the best choice to make the structure of page layout. 

<div style="width:100%; margin:auto;"><img width="90%" src="Basic-Html5-Layout.jpg"></p>
<p><img width="40%" src="Basic-Html5-Layout(mobile).jpg"></p>

In here, I summarize out all the key points of each method for your reference:
<h2>Left Floating Divs</h2>

<h3>Collapsed Container </h3>
<p>One of the MOST tricky things working with nested floats is how we solve the Collapsed Container.</p>
<img width="90%" src="Basic-Html5-Layout-collapsed-container.jpg"> </img>

In our code, you could find out we give out three solutions:</p>
- MANUALLY DIV METHOD is to manually append one empty div at the end of the last children div : <div style="clear: both;"></div>
- PSEODU DIV METHOD is use CSS Pseudo selector (:after) to automatically insert one empty div at the end of the last children div
- OVERFLOW METHOD is to set the Container's overflow attribute as 'auto' or 'hidden'

Details discussion please refer to CSS Guru's articles:
- <a href="http://css-tricks.com/all-about-floats/" target="_blank">All About Floats</a>
- <a href="http://www.positioniseverything.net/easyclearing.html" target="_blank">How To Clear Floats Without Structural Markup</a>

<h3>Tricky Width</h3>
Another MOST tricky things working with nested floating Div components is when set the width and height properties of an element with CSS, we just set the width and height of the Content area.</p>
<img width="50%" src="Basic-Html5-Layout-css-block.jpg"></img>
In order to auto stretch all children Divs along with and inside their parent container, we have to consider all possible sizes of the parent.</p>
For example, as for the Header div, when the window's width is just 481px (this's the smallest possible width), in order to keep the Header div inside its container rather then overflow, it's content size must be smaller then 96%! That's is 96% + 4% (=20px/481px) < 100% 
Details discussion please refer to my post: <a href="http://www.ebizdesigner.com/website-building/css/item/48-responsive-floating-divs.html" target="_blank">Responsive Floating Divs</a>.

