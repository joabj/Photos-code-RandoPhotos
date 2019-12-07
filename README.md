# Photos-code-RandoPhotos

This is a JavaScript/Node.js script to pick a random assortment of 10 photos to run on my home page, from the directory on my site /Photos/[year selected as a variable]. 

see it in action here: http://www.joabj.com

It requires Node.js. Here is the code that should go on my site's home page(index.html):

		<script src="/libraries/joabj/ImageLoader.js"></script>
    
    	<a href=/Photos/2019>
		<img src=/Photos/2015/1503-FA-Morrison-Road.jpg width=450 height=450 id="randomPicture" alt="Interstitial: Margaret Morrison"/></a>
		</center>


My own implementation is located on the /Photos/code/RandoPhotos directory within the Website.


Future work:
    Move to Python
    Make year an external variable
    Automatically pick a year at random/or latest year
