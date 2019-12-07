//The purpose of this node/JavaScript program is to generate 15 random JPGs for the home page/etc.
//It generates a file ImageLoader.js which is then called by the user's browser
//It should be run every few minutes or so on crontab.
//As of right now, it requires RandoArray.js to run
//It is hardwired to my own site's directory /Photos/[one of the years available]/[photos, in the .jpg format]
//NOTE: Every year the YearArray should be updated to include the new year.



var fs = require('fs')
var path = require('path')
var parsing = require ('./RandoArray.js')


//Note: Randomly picks a year from all years available
//Year array must be updated to include new years
var YearArray = ["2012", "2013", 
                "2014", "2015", "2016", "2017", "2018", "2019"]; 
var year = YearArray[Math.floor(Math.random() * YearArray.length)];

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

