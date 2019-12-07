//The purpose of this node/JavaScript program is to generate 10 random JPGs for the home page/etc.
//It generates a file ImageLoader.js which is then called by the user's browser
//It should be run every 10 minutes or so on crontab.
//As of right now, it requires RandoArray.js to run
//NOTE: To update year of photos, replace year variable below of old year with the new year.



var fs = require('fs')
var path = require('path')
var parsing = require ('./RandoArray.js')
var year = "2019"
var YearPath = "/Photos/" + year
var dir = "/var/www/" + YearPath + "/"
var filterStr = 'jpg'
var WriteFile = "/var/www/libraries/joabj/ImageLoader.js";

var opening = "//This file is automatically created by /Photos/code/RandoPhotos.js \nwindow.onload = choosePic; \nvar myPix = new Array(\n"	
var closing = ");function choosePic(){randomNum = Math.floor((Math.random() * myPix.length));document.getElementById(\"randomPicture\").src = myPix[randomNum];}" 




Items = 15;  //The total number of random items//

//If the write file exists, it is deleted; otherwise the
//the program moves on...
	fs.unlink(WriteFile, function (err){
		if (err) { return }
		});
		
    fs.appendFile(WriteFile, opening, function (err){
		if (err) { return }
		});
			
		
			
parsing(dir, filterStr, function (err, list) {

var selection = [];
for (counter = 0; counter < Items; counter++) {
		randomNum = Math.floor((Math.random() * list.length))
		selection[counter] = list[randomNum];
		selection[counter] = "'/Photos/"+[year]+"/" + selection[counter] + "',\n";		
	//			console.log(selection[counter] + '\n'); for testing purposes
				fs.appendFile(WriteFile, selection[counter]); 
}

  list.forEach(function (selection, counter) {
  //This if statement is to just generate the last entry in the array w/o a trailing comma
    if (counter == Items - 1) {
	selection = "'" + YearPath + "/" + selection + "'\n";
    fs.appendFile(WriteFile, selection);} 
	
	})
  
  
  
  
  
  
   fs.appendFile(WriteFile, closing, function (err){
		if (err) { return }
		});

  
  
});

