/* tomasz bartkowiak - saatchi masius */
//

// -- create a namespace for add -- /
var advert = {};
// base is a background which never changes
advert.base ={};
// advert.sheet is a white paper sheet animation;
advert.sheet ={};
advert.sheet_cont_1 = {};

advert.sheet_2 = {};
advert.sheet_cont_2 = {};

advert.sheet_3 = {};
advert.sheet_cont_3 = {};

advert.sheet_4 = {};
advert.sheet_cont_4 = {};

advert.sheet_5 = {};
advert.sheet_cont_5 = {};


advert.buttons = {}



// half of the flash framerate;
var frameRate =16;

// in milliseconds;
var slideDisplayTime = 2000;


window.onload = function () 

{
	

	console.log("--ad--");

	advert.base.ADD_WIDTH = 756; 
    advert.base.ADD_HEIGHT = 150;        
       
    advert.base.canvas = document.getElementById('add');
    advert.base.c = advert.base.canvas.getContext('2d');
         
    advert.base.canvas.width = advert.base.ADD_WIDTH;
    advert.base.canvas.height = advert.base.ADD_HEIGHT;

    // preload all the images;

    advert.base.preload = function () {
	    advert.base.loaded = 0;
	    advert.base.totalToLoad = 1;
        advert.base.ready = false;
	    advert.base.path = 'img/';
	    advert.base.images = ['base.jpg'];
	    advert.base.resources = new Array();



	    for (image in advert.base.images) {

	    	var ni = new Image();
	    	ni.src = advert.base.path + advert.base.images[image];
	    	advert.base.resources.push(ni);

	    	advert.base.resources[image].onload = function() {
	    		advert.base.loaded ++ ;
	    		advert.base.loadingProgressCheck(advert.base.loaded);
	    	}


	    }

    }



    // progress check
    advert.base.loadingProgressCheck = function(l) {

    	if(l==this.totalToLoad) {
			console.log("background image --  loaded");
			//start the action here;
            advert.base.ready = true;
			//advert.base.drawFrame();
            advert.checkAssetsLoaded ();

    	}

    }


    //draw this frame

    advert.base.drawFrame  = function () {

    	advert.base.ffp =  setTimeout(function () {

    		advert.base.request  = requestAnimationFrame(advert.base.drawFrame, advert.base.canvas);
    		advert.base.c.clearRect(0,0, advert.base.ADD_WIDTH, advert.base.ADD_HEIGHT);
    		advert.base.c.drawImage(advert.base.resources[0],0,0, 756,150,0,0,756,150);
    		console.log("--background base drawn --");
    		cancelAnimationFrame(advert.base.request);
    	}, 1000/frameRate)
    	//only once
    	




    }


/*-------- WHITE SHEET 1-------- */
    advert.sheet.ADD_WIDTH = 756; 
    advert.sheet.ADD_HEIGHT = 150;        
       
    advert.sheet.canvas = document.getElementById('sheet');
    advert.sheet.c = advert.sheet.canvas.getContext('2d');
         
    advert.sheet.canvas.width = advert.sheet.ADD_WIDTH;
    advert.sheet.canvas.height = advert.sheet.ADD_HEIGHT;

    advert.sheet.index =0;
    advert.sheet.frame =0;
    advert.sheet.xpos = advert.sheet.ypos = 0;
    advert.sheet.numFrames = 20;

    // preload all the images;

    advert.sheet.preload = function () {

	    advert.sheet.loaded = 0;
        advert.sheet.ready = false;
	    advert.sheet.totalToLoad = 2;
	    advert.sheet.path = 'img/sheet/';
	    advert.sheet.images = ['white_sheet_A.png','white_sheet_B.png'];
	    advert.sheet.resources = new Array();



	    for (image in advert.sheet.images) {

	    	var ni = new Image();
	    	ni.src = advert.sheet.path + advert.sheet.images[image];
	    	advert.sheet.resources.push(ni);

	    	advert.sheet.resources[image].onload = function() {
	    		advert.sheet.loaded ++ ;
	    		advert.sheet.loadingProgressCheck(advert.sheet.loaded);
	    	}


	    }

    }



    // progress check
    advert.sheet.loadingProgressCheck = function(l) {

    	if(l==this.totalToLoad) {
			console.log("white sheet sequence - loaded");
			//start the action here;
              advert.sheet.ready = true;
			//advert.sheet.drawFrame();
            advert.checkAssetsLoaded ();

    	}

    }


    //draw this frame

    advert.sheet.drawFrame  = function () {

    	advert.sheet.ffp =  setTimeout(function () {

    		advert.sheet.request  = requestAnimationFrame(advert.sheet.drawFrame, advert.sheet.canvas);
    		advert.sheet.c.clearRect(0,0, advert.sheet.ADD_WIDTH, advert.sheet.ADD_HEIGHT);
    		advert.sheet.c.drawImage(advert.sheet.resources[advert.sheet.index],advert.sheet.xpos,advert.sheet.ypos,756,150,0,0,756,150);
    		//advert.sheet.index++;

            //>     Sprite Sheet iteration
                    //console.log( advert.sheet.index, advert.sheet.frame)
                    //each time around we add the frame size to our xpos, moving along the source image
                    advert.sheet.xpos += 756;
                    //increase the frame so we know which frame of our animation we are currently on
                    advert.sheet.frame += 1;
                    //if our index is higher than our total number of frames, we're at the end and better start over
                    if (advert.sheet.frame >= advert.sheet.numFrames) {
                        advert.sheet.xpos =0;
                        advert.sheet.ypos =0;
                        advert.sheet.frame=0;  
                        advert.sheet.index++;  
                    //if we've gotten to the limit of our source image's width, we need to move down one row of frames              
                    } else if (advert.sheet.xpos + 756 > advert.sheet.resources[advert.sheet.index].width){
                       advert.sheet.xpos =0;
                       advert.sheet.ypos += 150;
                    }

            //> The end of spritesheet iteration

    		    if(advert.sheet.index>=advert.sheet.totalToLoad) {
                   advert.sheet.index = 0;
                   cancelAnimationFrame(advert.sheet.request);
                }

    		
    		//cancelAnimationFrame(advert.sheet.request);
    	}, 1000/frameRate)
    
    	




    }

    /*---- slide content 1 ---- */
    advert.sheet_cont_1.ADD_WIDTH = 756; 
    advert.sheet_cont_1.ADD_HEIGHT = 150;        
       
    advert.sheet_cont_1.canvas = document.getElementById('sheet_cont_1');
    advert.sheet_cont_1.c = advert.sheet_cont_1.canvas.getContext('2d');
         
    advert.sheet_cont_1.canvas.width = advert.sheet_cont_1.ADD_WIDTH;
    advert.sheet_cont_1.canvas.height = advert.sheet_cont_1.ADD_HEIGHT;
    
    advert.sheet_cont_1.index =0;
    advert.sheet_cont_1.frame =0;
    advert.sheet_cont_1.xpos = advert.sheet_cont_1.ypos = 0;
    advert.sheet_cont_1.numFrames = 20;

    // preload all the images;

    advert.sheet_cont_1.preload = function () {

	    advert.sheet_cont_1.loaded = 0;
        advert.sheet_cont_1.ready = false;
	    advert.sheet_cont_1.totalToLoad = 2;
	    advert.sheet_cont_1.path = 'img/sheet_cont_1/';
	    advert.sheet_cont_1.images = ['sheet_cont_1_A.png','sheet_cont_1_B.png'];
        advert.sheet_cont_1.resources = new Array();

	    for (image in advert.sheet_cont_1.images) {

	       
	    	var ni = new Image();
	    	ni.src = advert.sheet_cont_1.path + advert.sheet_cont_1.images[image];
            console.log(ni);
	    	advert.sheet_cont_1.resources.push(ni);

	    	advert.sheet_cont_1.resources[image].onload = function() {
	    		advert.sheet_cont_1.loaded ++ ;
	    		advert.sheet_cont_1.loadingProgressCheck(advert.sheet_cont_1.loaded);
	    	}


	    }

    }



    // progress check
    advert.sheet_cont_1.loadingProgressCheck = function(l) {

    	if(l==this.totalToLoad) {
			console.log("slide_1 content  -- loaded");
			//start the action here;

			//advert.sheet_cont_1.drawFrame();
            advert.sheet_cont_1.ready = true;
            advert.checkAssetsLoaded ();

    	}

    }


    //draw this frame

    advert.sheet_cont_1.drawFrame  = function () {

    	advert.sheet_cont_1.ffp =  setTimeout(function () {

    		advert.sheet_cont_1.request  = requestAnimationFrame(advert.sheet_cont_1.drawFrame, advert.sheet_cont_1.canvas);
    		advert.sheet_cont_1.c.clearRect(0,0, advert.sheet_cont_1.ADD_WIDTH, advert.sheet_cont_1.ADD_HEIGHT);
    		//advert.sheet_cont_1.c.drawImage(advert.sheet_cont_1.resources[advert.sheet_cont_1.index],0,0, 756,150,0,0,756,150);
    		//advert.sheet_cont_1.index++;
            advert.sheet_cont_1.c.drawImage(advert.sheet_cont_1.resources[advert.sheet_cont_1.index],advert.sheet_cont_1.xpos,advert.sheet_cont_1.ypos,756,150,0,0,756,150);
            //advert.sheet.index++;

            //>     Sprite Sheet iteration
                    console.log("cont_1",  advert.sheet_cont_1.index, advert.sheet_cont_1.frame)
                    //each time around we add the frame size to our xpos, moving along the source image
                    advert.sheet_cont_1.xpos += 756;
                    //increase the frame so we know which frame of our animation we are currently on
                    advert.sheet_cont_1.frame += 1;
                    //if our index is higher than our total number of frames, we're at the end and better start over
                    if (advert.sheet_cont_1.frame >= advert.sheet_cont_1.numFrames) {
                        advert.sheet_cont_1.xpos =0;
                        advert.sheet_cont_1.ypos =0;
                        advert.sheet_cont_1.frame=0;  
                        advert.sheet_cont_1.index++;  
                    //if we've gotten to the limit of our source image's width, we need to move down one row of frames              
                    } else if (advert.sheet_cont_1.xpos + 756 > advert.sheet_cont_1.resources[advert.sheet_cont_1.index].width){
                       advert.sheet_cont_1.xpos =0;
                       advert.sheet_cont_1.ypos += 150;
                    }

            //> The end of spritesheet iteration


    		    if(advert.sheet_cont_1.index>=advert.sheet_cont_1.totalToLoad) {
                  advert.sheet_cont_1.index = 0;
                  cancelAnimationFrame(advert.sheet_cont_1.request);

                  // makes a delay of 4 seconds
                  //advert.sheet_cont_1.timer = setTimeout(function() {advert.sheet_2.drawFrame(), advert.sheet_cont_2.drawFrame()}, 2000);
                    
                }

    		//cancelAnimationFrame(advert.sheet_cont_1.request);
    	}, 1000/frameRate)
    	//only once
    	




    }


/*-------- WHITE SHEET 2-------- */

    advert.sheet_2.ADD_WIDTH = 756; 
    advert.sheet_2.ADD_HEIGHT = 150;        
       
    advert.sheet_2.canvas = document.getElementById('sheet_2');
    advert.sheet_2.c = advert.sheet_2.canvas.getContext('2d');
         
    advert.sheet_2.canvas.width = advert.sheet_2.ADD_WIDTH;
    advert.sheet_2.canvas.height = advert.sheet_2.ADD_HEIGHT;


    advert.sheet_2.drawFrame = function () {

        

            advert.sheet_2.ffp =  setTimeout(function () {

            advert.sheet_2.request  = requestAnimationFrame(advert.sheet_2.drawFrame, advert.sheet_2.canvas);
            advert.sheet_2.c.clearRect(0,0, advert.sheet_2.ADD_WIDTH, advert.sheet_2.ADD_HEIGHT);
          //  advert.sheet_2.c.drawImage(advert.sheet.resources[advert.sheet.index],0,0, 756,150,0,0,756,150);
            advert.sheet_2.c.drawImage(advert.sheet.resources[advert.sheet.index],advert.sheet.xpos,advert.sheet.ypos,756,150,0,0,756,150);
            //console.log("---" ,advert.sheet.index, advert.sheet.resources.length);
          
                   //>     Sprite Sheet iteration
                    console.log( advert.sheet.index, advert.sheet.frame)
                    //each time around we add the frame size to our xpos, moving along the source image
                    advert.sheet.xpos += 756;
                    //increase the frame so we know which frame of our animation we are currently on
                    advert.sheet.frame += 1;
                    //if our index is higher than our total number of frames, we're at the end and better start over
                    if (advert.sheet.frame >= advert.sheet.numFrames) {
                        advert.sheet.xpos =0;
                        advert.sheet.ypos =0;
                        advert.sheet.frame=0;  
                        advert.sheet.index++;  
                    //if we've gotten to the limit of our source image's width, we need to move down one row of frames              
                    } else if (advert.sheet.xpos + 756 > advert.sheet.resources[advert.sheet.index].width){
                       advert.sheet.xpos =0;
                       advert.sheet.ypos += 150;
                    }

            //> The end of spritesheet iteration

                if(advert.sheet.index>=advert.sheet.totalToLoad) {
                  advert.sheet.index = 0;
                  cancelAnimationFrame(advert.sheet_2.request);
                  console.log("--the end of WHITE SHEET 2");
                }

            
            //cancelAnimationFrame(advert.sheet.request);
        }, 1000/frameRate)
        //only once

}



    /*---- slide content 2 ---- */
    advert.sheet_cont_2.ADD_WIDTH = 756; 
    advert.sheet_cont_2.ADD_HEIGHT = 150;        
       
    advert.sheet_cont_2.canvas = document.getElementById('sheet_cont_2');
    advert.sheet_cont_2.c = advert.sheet_cont_2.canvas.getContext('2d');
         
    advert.sheet_cont_2.canvas.width = advert.sheet_cont_2.ADD_WIDTH;
    advert.sheet_cont_2.canvas.height = advert.sheet_cont_2.ADD_HEIGHT;
    advert.sheet_cont_2.index =0;

    // preload all the images;

    advert.sheet_cont_2.preload = function () {

        advert.sheet_cont_2.loaded = 0;
        advert.sheet_cont_2.ready = false;
        advert.sheet_cont_2.totalToLoad = 40;
        advert.sheet_cont_2.path = 'img/sheet_cont_2/';
        advert.sheet_cont_2.images = ['sheet_cont_2_28.png','sheet_cont_2_29.png','sheet_cont_2_30.png','sheet_cont_2_31.png','sheet_cont_2_32.png','sheet_cont_2_33.png','sheet_cont_2_34.png','sheet_cont_2_35.png','sheet_cont_2_36.png','sheet_cont_2_37.png','sheet_cont_2_38.png','sheet_cont_2_39.png','sheet_cont_2_40.png','sheet_cont_2_41.png','sheet_cont_2_42.png','sheet_cont_2_43.png','sheet_cont_2_44.png','sheet_cont_2_45.png','sheet_cont_2_46.png','sheet_cont_2_47.png','sheet_cont_2_48.png','sheet_cont_2_49.png','sheet_cont_2_50.png','sheet_cont_2_51.png','sheet_cont_2_52.png','sheet_cont_2_53.png','sheet_cont_2_54.png','sheet_cont_2_55.png','sheet_cont_2_56.png','sheet_cont_2_57.png','sheet_cont_2_58.png','sheet_cont_2_59.png','sheet_cont_2_60.png','sheet_cont_2_61.png','sheet_cont_2_62.png','sheet_cont_2_63.png','sheet_cont_2_64.png','sheet_cont_2_65.png','sheet_cont_2_66.png','sheet_cont_2_67.png'];
        advert.sheet_cont_2.resources = new Array();



        for (image in advert.sheet_cont_2.images) {

            var ni = new Image();
            ni.src = advert.sheet_cont_2.path + advert.sheet_cont_2.images[image];
            advert.sheet_cont_2.resources.push(ni);

            advert.sheet_cont_2.resources[image].onload = function() {
                advert.sheet_cont_2.loaded ++ ;
                advert.sheet_cont_2.loadingProgressCheck(advert.sheet_cont_2.loaded);
            }


        }

    }



    // progress check
    advert.sheet_cont_2.loadingProgressCheck = function(l) {

        if(l==this.totalToLoad) {
            console.log("slide_2 content -- loaded");
            //start the action here;

            //advert.sheet_cont_1.drawFrame();
            advert.sheet_cont_2.ready = true;
            advert.checkAssetsLoaded ();
        }

    }


    //draw this frame

    advert.sheet_cont_2.drawFrame  = function () {

        advert.sheet_cont_2.ffp =  setTimeout(function () {

            advert.sheet_cont_2.request  = requestAnimationFrame(advert.sheet_cont_2.drawFrame, advert.sheet_cont_2.canvas);
            advert.sheet_cont_2.c.clearRect(0,0, advert.sheet_cont_2.ADD_WIDTH, advert.sheet_cont_2.ADD_HEIGHT);
            advert.sheet_cont_2.c.drawImage(advert.sheet_cont_2.resources[advert.sheet_cont_2.index],0,0, 756,150,0,0,756,150);
            advert.sheet_cont_2.index++;

                if(advert.sheet_cont_2.index>=advert.sheet_cont_2.totalToLoad) {
                  advert.sheet_cont_2.index = 0;
                  cancelAnimationFrame(advert.sheet_cont_2.request);

                  // makes a delay of 4 seconds
                 // advert.sheet_cont_2.timer = setTimeout(function() {advert.sheet_2.drawFrame()}, 2000);

                advert.sheet_cont_2.timer = setTimeout(function() {advert.sheet_3.drawFrame(),advert.sheet_cont_3.drawFrame()}, 2000);
                    
                }

            //cancelAnimationFrame(advert.sheet_cont_1.request);
        }, 1000/frameRate)
        //only once
        




    }


/*-------- WHITE SHEET 3-------- */

    advert.sheet_3.ADD_WIDTH = 756; 
    advert.sheet_3.ADD_HEIGHT = 150;        
       
    advert.sheet_3.canvas = document.getElementById('sheet_3');
    advert.sheet_3.c = advert.sheet_3.canvas.getContext('2d');
         
    advert.sheet_3.canvas.width = advert.sheet_3.ADD_WIDTH;
    advert.sheet_3.canvas.height = advert.sheet_3.ADD_HEIGHT;
    advert.sheet_3.index =0;

    advert.sheet_3.drawFrame = function () {


            advert.sheet_3.ffp =  setTimeout(function () {

            advert.sheet_3.request  = requestAnimationFrame(advert.sheet_3.drawFrame, advert.sheet_3.canvas);
            advert.sheet_3.c.clearRect(0,0, advert.sheet_3.ADD_WIDTH, advert.sheet_3.ADD_HEIGHT);
            //advert.sheet_3.c.drawImage(advert.sheet.resources[advert.sheet.index],0,0, 756,150,0,0,756,150);
            //console.log("---" ,advert.sheet.index, advert.sheet.resources.length);
            
             advert.sheet_3.c.drawImage(advert.sheet.resources[advert.sheet.index],advert.sheet.xpos,advert.sheet.ypos,756,150,0,0,756,150);
            //console.log("---" ,advert.sheet.index, advert.sheet.resources.length);
          
                   //>     Sprite Sheet iteration
                    console.log( advert.sheet.index, advert.sheet.frame)
                    //each time around we add the frame size to our xpos, moving along the source image
                    advert.sheet.xpos += 756;
                    //increase the frame so we know which frame of our animation we are currently on
                    advert.sheet.frame += 1;
                    //if our index is higher than our total number of frames, we're at the end and better start over
                    if (advert.sheet.frame >= advert.sheet.numFrames) {
                        advert.sheet.xpos =0;
                        advert.sheet.ypos =0;
                        advert.sheet.frame=0;  
                        advert.sheet.index++;  
                    //if we've gotten to the limit of our source image's width, we need to move down one row of frames              
                    } else if (advert.sheet.xpos + 756 > advert.sheet.resources[advert.sheet.index].width){
                       advert.sheet.xpos =0;
                       advert.sheet.ypos += 150;
                    }

            //> The end of spritesheet iteration

                if(advert.sheet.index>=advert.sheet.totalToLoad) {
                  advert.sheet.index = 0;
                  cancelAnimationFrame(advert.sheet_3.request);
                    // makes a delay of 4 seconds
               
                }

            
            //cancelAnimationFrame(advert.sheet.request);
        }, 1000/frameRate)
        //only once

}

 /*---- slide content 3 ---- */
    advert.sheet_cont_3.ADD_WIDTH = 756; 
    advert.sheet_cont_3.ADD_HEIGHT = 150;        
       
    advert.sheet_cont_3.canvas = document.getElementById('sheet_cont_3');
    advert.sheet_cont_3.c = advert.sheet_cont_3.canvas.getContext('2d');
         
    advert.sheet_cont_3.canvas.width = advert.sheet_cont_3.ADD_WIDTH;
    advert.sheet_cont_3.canvas.height = advert.sheet_cont_3.ADD_HEIGHT;
    advert.sheet_cont_3.index =0;

    // preload all the images;

    advert.sheet_cont_3.preload = function () {

        advert.sheet_cont_3.loaded = 0;
         advert.sheet_cont_3.ready = false;
        advert.sheet_cont_3.totalToLoad = 40;
        advert.sheet_cont_3.path = 'img/sheet_cont_3/';
        advert.sheet_cont_3.images = ['sheet_cont_3_28.png','sheet_cont_3_29.png','sheet_cont_3_30.png','sheet_cont_3_31.png','sheet_cont_3_32.png','sheet_cont_3_33.png','sheet_cont_3_34.png','sheet_cont_3_35.png','sheet_cont_3_36.png','sheet_cont_3_37.png','sheet_cont_3_38.png','sheet_cont_3_39.png','sheet_cont_3_40.png','sheet_cont_3_41.png','sheet_cont_3_42.png','sheet_cont_3_43.png','sheet_cont_3_44.png','sheet_cont_3_45.png','sheet_cont_3_46.png','sheet_cont_3_47.png','sheet_cont_3_48.png','sheet_cont_3_49.png','sheet_cont_3_50.png','sheet_cont_3_51.png','sheet_cont_3_52.png','sheet_cont_3_53.png','sheet_cont_3_54.png','sheet_cont_3_55.png','sheet_cont_3_56.png','sheet_cont_3_57.png','sheet_cont_3_58.png','sheet_cont_3_59.png','sheet_cont_3_60.png','sheet_cont_3_61.png','sheet_cont_3_62.png','sheet_cont_3_63.png','sheet_cont_3_64.png','sheet_cont_3_65.png','sheet_cont_3_66.png','sheet_cont_3_67.png'];
        advert.sheet_cont_3.resources = new Array();



        for (image in advert.sheet_cont_3.images) {

            var ni = new Image();
            ni.src = advert.sheet_cont_3.path + advert.sheet_cont_3.images[image];
            advert.sheet_cont_3.resources.push(ni);

            advert.sheet_cont_3.resources[image].onload = function() {
                advert.sheet_cont_3.loaded ++ ;
                advert.sheet_cont_3.loadingProgressCheck(advert.sheet_cont_3.loaded);
            }


        }

    }



    // progress check
    advert.sheet_cont_3.loadingProgressCheck = function(l) {

        if(l==this.totalToLoad) {
            console.log("slide_3 content -- loaded");
            //start the action here;

            //advert.sheet_cont_1.drawFrame();
             advert.sheet_cont_3.ready = true;
            advert.checkAssetsLoaded ();

        }

    }


    //draw this frame

    advert.sheet_cont_3.drawFrame  = function () {

        advert.sheet_cont_3.ffp =  setTimeout(function () {

            advert.sheet_cont_3.request  = requestAnimationFrame(advert.sheet_cont_3.drawFrame, advert.sheet_cont_3.canvas);
            advert.sheet_cont_3.c.clearRect(0,0, advert.sheet_cont_3.ADD_WIDTH, advert.sheet_cont_3.ADD_HEIGHT);
            advert.sheet_cont_3.c.drawImage(advert.sheet_cont_3.resources[advert.sheet_cont_3.index],0,0, 756,150,0,0,756,150);
            advert.sheet_cont_3.index++;

                if(advert.sheet_cont_3.index>=advert.sheet_cont_3.totalToLoad) {
                  advert.sheet_cont_3.index = 0;
                  cancelAnimationFrame(advert.sheet_cont_3.request);

                  // makes a delay of 4 seconds
                  advert.sheet_cont_3.timer = setTimeout(function() {advert.sheet_4.drawFrame(),  advert.sheet_cont_4.drawFrame()}, 2000);
                    
                }

            //cancelAnimationFrame(advert.sheet_cont_1.request);
        }, 1000/frameRate)
        //only once
        




    }

/*-------- WHITE SHEET 4-------- */

    advert.sheet_4.ADD_WIDTH = 756; 
    advert.sheet_4.ADD_HEIGHT = 150;        
       
    advert.sheet_4.canvas = document.getElementById('sheet_4');
    advert.sheet_4.c = advert.sheet_4.canvas.getContext('2d');
         
    advert.sheet_4.canvas.width = advert.sheet_4.ADD_WIDTH;
    advert.sheet_4.canvas.height = advert.sheet_4.ADD_HEIGHT;
    advert.sheet_4.index =0;

    advert.sheet_4.drawFrame = function () {


            advert.sheet_4.ffp =  setTimeout(function () {

            advert.sheet_4.request  = requestAnimationFrame(advert.sheet_4.drawFrame, advert.sheet_4.canvas);
            advert.sheet_4.c.clearRect(0,0, advert.sheet_4.ADD_WIDTH, advert.sheet_4.ADD_HEIGHT);
            //advert.sheet_4.c.drawImage(advert.sheet.resources[advert.sheet.index],0,0, 756,150,0,0,756,150);
            //console.log("---" ,advert.sheet.index, advert.sheet.resources.length);
            //advert.sheet.index++;

             advert.sheet_4.c.drawImage(advert.sheet.resources[advert.sheet.index],advert.sheet.xpos,advert.sheet.ypos,756,150,0,0,756,150);
            //console.log("---" ,advert.sheet.index, advert.sheet.resources.length);
          
                   //>     Sprite Sheet iteration
                    console.log( advert.sheet.index, advert.sheet.frame)
                    //each time around we add the frame size to our xpos, moving along the source image
                    advert.sheet.xpos += 756;
                    //increase the frame so we know which frame of our animation we are currently on
                    advert.sheet.frame += 1;
                    //if our index is higher than our total number of frames, we're at the end and better start over
                    if (advert.sheet.frame >= advert.sheet.numFrames) {
                        advert.sheet.xpos =0;
                        advert.sheet.ypos =0;
                        advert.sheet.frame=0;  
                        advert.sheet.index++;  
                    //if we've gotten to the limit of our source image's width, we need to move down one row of frames              
                    } else if (advert.sheet.xpos + 756 > advert.sheet.resources[advert.sheet.index].width){
                       advert.sheet.xpos =0;
                       advert.sheet.ypos += 150;
                    }

            //> The end of spritesheet iteration


                if(advert.sheet.index>=advert.sheet.totalToLoad) {
                  advert.sheet.index = 0;
                  cancelAnimationFrame(advert.sheet_4.request);
                    // makes a delay of 4 seconds
               
                }

            
            //cancelAnimationFrame(advert.sheet.request);
        }, 1000/frameRate)
        //only once

}


/*---- slide content 4 ---- */
    advert.sheet_cont_4.ADD_WIDTH = 756; 
    advert.sheet_cont_4.ADD_HEIGHT = 150;        
       
    advert.sheet_cont_4.canvas = document.getElementById('sheet_cont_4');
    advert.sheet_cont_4.c = advert.sheet_cont_4.canvas.getContext('2d');
         
    advert.sheet_cont_4.canvas.width = advert.sheet_cont_4.ADD_WIDTH;
    advert.sheet_cont_4.canvas.height = advert.sheet_cont_4.ADD_HEIGHT;
    advert.sheet_cont_4.index =0;

    // preload all the images;

    advert.sheet_cont_4.preload = function () {

        advert.sheet_cont_4.loaded = 0;
         advert.sheet_cont_4.ready = false;
        advert.sheet_cont_4.totalToLoad = 40;
        advert.sheet_cont_4.path = 'img/sheet_cont_4/';
        advert.sheet_cont_4.images = ['sheet_cont_4_28.png','sheet_cont_4_29.png','sheet_cont_4_30.png','sheet_cont_4_31.png','sheet_cont_4_32.png','sheet_cont_4_33.png','sheet_cont_4_34.png','sheet_cont_4_35.png','sheet_cont_4_36.png','sheet_cont_4_37.png','sheet_cont_4_38.png','sheet_cont_4_39.png','sheet_cont_4_40.png','sheet_cont_4_41.png','sheet_cont_4_42.png','sheet_cont_4_43.png','sheet_cont_4_44.png','sheet_cont_4_45.png','sheet_cont_4_46.png','sheet_cont_4_47.png','sheet_cont_4_48.png','sheet_cont_4_49.png','sheet_cont_4_50.png','sheet_cont_4_51.png','sheet_cont_4_52.png','sheet_cont_4_53.png','sheet_cont_4_54.png','sheet_cont_4_55.png','sheet_cont_4_56.png','sheet_cont_4_57.png','sheet_cont_4_58.png','sheet_cont_4_59.png','sheet_cont_4_60.png','sheet_cont_4_61.png','sheet_cont_4_62.png','sheet_cont_4_63.png','sheet_cont_4_64.png','sheet_cont_4_65.png','sheet_cont_4_66.png','sheet_cont_4_67.png'];
        advert.sheet_cont_4.resources = new Array();



        for (image in advert.sheet_cont_4.images) {

            var ni = new Image();
            ni.src = advert.sheet_cont_4.path + advert.sheet_cont_4.images[image];
            advert.sheet_cont_4.resources.push(ni);

            advert.sheet_cont_4.resources[image].onload = function() {
                advert.sheet_cont_4.loaded ++ ;
                advert.sheet_cont_4.loadingProgressCheck(advert.sheet_cont_4.loaded);
            }


        }

    }



    // progress check
    advert.sheet_cont_4.loadingProgressCheck = function(l) {

        if(l==this.totalToLoad) {
            console.log("slide_4 content -- loaded");
            //start the action here;

            //advert.sheet_cont_1.drawFrame();
            advert.sheet_cont_4.ready = true;
            advert.checkAssetsLoaded ();

        }

    }


    //draw this frame

    advert.sheet_cont_4.drawFrame  = function () {

        advert.sheet_cont_4.ffp =  setTimeout(function () {

            advert.sheet_cont_4.request  = requestAnimationFrame(advert.sheet_cont_4.drawFrame, advert.sheet_cont_4.canvas);
            advert.sheet_cont_4.c.clearRect(0,0, advert.sheet_cont_4.ADD_WIDTH, advert.sheet_cont_4.ADD_HEIGHT);
            advert.sheet_cont_4.c.drawImage(advert.sheet_cont_4.resources[advert.sheet_cont_4.index],0,0, 756,150,0,0,756,150);
            advert.sheet_cont_4.index++;

                if(advert.sheet_cont_4.index>=advert.sheet_cont_4.totalToLoad) {
                  advert.sheet_cont_4.index = 0;
                  cancelAnimationFrame(advert.sheet_cont_4.request);

                  // makes a delay of 4 seconds
                  advert.showButton();
                  advert.sheet_cont_4.timer = setTimeout(function() {advert.sheet_5.drawFrame(),  advert.sheet_cont_5.drawFrame()}, 2000);
                    
                }

            //cancelAnimationFrame(advert.sheet_cont_1.request);
        }, 1000/frameRate)
        //only once
        




    }



/*-------- WHITE SHEET 5-------- */

    advert.sheet_5.ADD_WIDTH = 756; 
    advert.sheet_5.ADD_HEIGHT = 150;        
       
    advert.sheet_5.canvas = document.getElementById('sheet_5');
    advert.sheet_5.c = advert.sheet_5.canvas.getContext('2d');
         
    advert.sheet_5.canvas.width = advert.sheet_5.ADD_WIDTH;
    advert.sheet_5.canvas.height = advert.sheet_5.ADD_HEIGHT;
    advert.sheet_5.index =0;

    advert.sheet_5.drawFrame = function () {


            advert.sheet_5.ffp =  setTimeout(function () {

            advert.sheet_5.request  = requestAnimationFrame(advert.sheet_5.drawFrame, advert.sheet_5.canvas);
            advert.sheet_5.c.clearRect(0,0, advert.sheet_5.ADD_WIDTH, advert.sheet_5.ADD_HEIGHT);
            //advert.sheet_5.c.drawImage(advert.sheet.resources[advert.sheet.index],0,0, 756,150,0,0,756,150);
            //console.log("---" ,advert.sheet.index, advert.sheet.resources.length);
            //advert.sheet.index++;

             advert.sheet_5.c.drawImage(advert.sheet.resources[advert.sheet.index],advert.sheet.xpos,advert.sheet.ypos,756,150,0,0,756,150);
            //console.log("---" ,advert.sheet.index, advert.sheet.resources.length);
          
                   //>     Sprite Sheet iteration
                    console.log( advert.sheet.index, advert.sheet.frame)
                    //each time around we add the frame size to our xpos, moving along the source image
                    advert.sheet.xpos += 756;
                    //increase the frame so we know which frame of our animation we are currently on
                    advert.sheet.frame += 1;
                    //if our index is higher than our total number of frames, we're at the end and better start over
                    if (advert.sheet.frame >= advert.sheet.numFrames) {
                        advert.sheet.xpos =0;
                        advert.sheet.ypos =0;
                        advert.sheet.frame=0;  
                        advert.sheet.index++;  
                    //if we've gotten to the limit of our source image's width, we need to move down one row of frames              
                    } else if (advert.sheet.xpos + 756 > advert.sheet.resources[advert.sheet.index].width){
                       advert.sheet.xpos =0;
                       advert.sheet.ypos += 150;
                    }

            //> The end of spritesheet iteration

                if(advert.sheet.index>=advert.sheet.totalToLoad) {
                  advert.sheet.index = 0;
                  cancelAnimationFrame(advert.sheet_5.request);
                    // makes a delay of 4 seconds
               
                }

            
            //cancelAnimationFrame(advert.sheet.request);
        }, 1000/frameRate)
        //only once

}

/*---- slide content 5 ---- */
    advert.sheet_cont_5.ADD_WIDTH = 756; 
    advert.sheet_cont_5.ADD_HEIGHT = 150;        
       
    advert.sheet_cont_5.canvas = document.getElementById('sheet_cont_5');
    advert.sheet_cont_5.c = advert.sheet_cont_5.canvas.getContext('2d');
         
    advert.sheet_cont_5.canvas.width = advert.sheet_cont_5.ADD_WIDTH;
    advert.sheet_cont_5.canvas.height = advert.sheet_cont_5.ADD_HEIGHT;
    advert.sheet_cont_5.index =0;

    // preload all the images;

    advert.sheet_cont_5.preload = function () {

        advert.sheet_cont_5.loaded = 0;
          advert.sheet_cont_5.ready = false;
        advert.sheet_cont_5.totalToLoad = 40;
        advert.sheet_cont_5.path = 'img/sheet_cont_5/';
        advert.sheet_cont_5.images = ['sheet_cont_5_28.png','sheet_cont_5_29.png','sheet_cont_5_30.png','sheet_cont_5_31.png','sheet_cont_5_32.png','sheet_cont_5_33.png','sheet_cont_5_34.png','sheet_cont_5_35.png','sheet_cont_5_36.png','sheet_cont_5_37.png','sheet_cont_5_38.png','sheet_cont_5_39.png','sheet_cont_5_40.png','sheet_cont_5_41.png','sheet_cont_5_42.png','sheet_cont_5_43.png','sheet_cont_5_44.png','sheet_cont_5_45.png','sheet_cont_5_46.png','sheet_cont_5_47.png','sheet_cont_5_48.png','sheet_cont_5_49.png','sheet_cont_5_50.png','sheet_cont_5_51.png','sheet_cont_5_52.png','sheet_cont_5_53.png','sheet_cont_5_54.png','sheet_cont_5_55.png','sheet_cont_5_56.png','sheet_cont_5_57.png','sheet_cont_5_58.png','sheet_cont_5_59.png','sheet_cont_5_60.png','sheet_cont_5_61.png','sheet_cont_5_62.png','sheet_cont_5_63.png','sheet_cont_5_64.png','sheet_cont_5_65.png','sheet_cont_5_66.png','sheet_cont_5_67.png'];
        advert.sheet_cont_5.resources = new Array();



        for (image in advert.sheet_cont_5.images) {

            var ni = new Image();
            ni.src = advert.sheet_cont_5.path + advert.sheet_cont_5.images[image];
            advert.sheet_cont_5.resources.push(ni);

            advert.sheet_cont_5.resources[image].onload = function() {
                advert.sheet_cont_5.loaded ++ ;
                advert.sheet_cont_5.loadingProgressCheck(advert.sheet_cont_5.loaded);
            }


        }

    }



    // progress check
    advert.sheet_cont_5.loadingProgressCheck = function(l) {

        if(l==this.totalToLoad) {
            console.log("slide_5 content -- loaded");
            //start the action here;

            //advert.sheet_cont_1.drawFrame();
              advert.sheet_cont_5.ready = true;
            advert.checkAssetsLoaded ();

        }

    }


    //draw this frame

    advert.sheet_cont_5.drawFrame  = function () {

        advert.sheet_cont_5.ffp =  setTimeout(function () {

            advert.sheet_cont_5.request  = requestAnimationFrame(advert.sheet_cont_5.drawFrame, advert.sheet_cont_5.canvas);
            advert.sheet_cont_5.c.clearRect(0,0, advert.sheet_cont_5.ADD_WIDTH, advert.sheet_cont_5.ADD_HEIGHT);
            advert.sheet_cont_5.c.drawImage(advert.sheet_cont_5.resources[advert.sheet_cont_5.index],0,0, 756,150,0,0,756,150);
            advert.sheet_cont_5.index++;

                if(advert.sheet_cont_5.index>=advert.sheet_cont_5.totalToLoad) {
                  advert.sheet_cont_5.index = 0;
                  cancelAnimationFrame(advert.sheet_cont_5.request);

                  // makes a delay of 4 seconds
                  //advert.sheet_cont_.timer = setTimeout(function() {advert.sheet_5.drawFrame()}, 2000);
                    
                }

            //cancelAnimationFrame(advert.sheet_cont_1.request);
        }, 1000/frameRate)
        //only once
        




    }

    //*** buttons

    advert.buttons.ADD_WIDTH = 151; 
    advert.buttons.ADD_HEIGHT = 32;        
       
    advert.buttons.canvas = document.getElementById('button-cta');
    advert.buttons.c = advert.buttons.canvas.getContext('2d');
         
    advert.buttons.canvas.width = advert.buttons.ADD_WIDTH;
    advert.buttons.canvas.height = advert.buttons.ADD_HEIGHT;

    // preload all the images;

    advert.buttons.preload = function () {
        advert.buttons.loaded = 0;
        advert.buttons.totalToLoad = 1; 
        advert.buttons.ready = false;
        advert.buttons.path = 'img/buttons/';
        advert.buttons.images = ['cta.png'];
        advert.buttons.resources = new Array();



        for (image in advert.buttons.images) {

            var ni = new Image();
            ni.src = advert.buttons.path + advert.buttons.images[image];
            advert.buttons.resources.push(ni);

            advert.buttons.resources[image].onload = function() {
                advert.buttons.loaded ++ ;
                advert.buttons.loadingProgressCheck(advert.buttons.loaded);
            }


        }

    }



    // progress check
    advert.buttons.loadingProgressCheck = function(l) {

        if(l==this.totalToLoad) {
            console.log("buttons image --  loaded");
            //start the action here;
                  advert.buttons.ready = true;
            advert.checkAssetsLoaded ();
            //advert.buttons.drawFrame();

        }

    }


    //draw this frame

    advert.buttons.drawFrame  = function () {

        advert.buttons.ffp =  setTimeout(function () {

            advert.buttons.request  = requestAnimationFrame(advert.buttons.drawFrame, advert.buttons.canvas);
            advert.buttons.c.clearRect(0,0, advert.buttons.ADD_WIDTH, advert.buttons.ADD_HEIGHT);
            advert.buttons.c.drawImage(advert.buttons.resources[0],0,0, 151,32,0,0,151,32);
       
            cancelAnimationFrame(advert.buttons.request);
             console.log("buttons image --  drawn");
        }, 1000/frameRate)
        //only once
        




    }


// general functions in advert namespace


advert.showButton = function () {

var button = document.getElementById("button-cta"); //or use jQuery's $("#photo")
//TweenLite.to(button, 2, css:{top:"20px", backgroundColor:"#FF0000"},);
TweenLite.to(button, 1, {css:{left:"590px"}});
console.log("showing the button");

}

advert.checkAssetsLoaded = function () {

   console.log('---')  

 var flag = true;
 var arr = new Array (advert.base.ready,
 advert.sheet.ready ,
 advert.sheet_cont_1.ready ,
 advert.sheet_cont_2.ready,
 advert.sheet_cont_3.ready,
 advert.sheet_cont_4.ready,
 advert.sheet_cont_5.ready,
 advert.buttons.ready);
    console.log(arr )


        for (a in arr) {
            if (arr[a] ==false) {
                flag = false;
            } 
        }

    if(flag==true) {
        // this is only true 
        console.log("+++++playback");
        
        advert.playBanner();
    } else if (flag==false) {
        // changes flag to false so 

    }

}

advert.playBanner = function () {


    advert.base.drawFrame();
    advert.sheet.drawFrame();
    advert.sheet_cont_1.drawFrame();

    advert.buttons.drawFrame();


}

// ******** init ***//

advert.init = function () {
    advert.buttons.preload();
    advert.sheet_cont_5.preload();
    advert.sheet_cont_4.preload();
    advert.sheet_cont_3.preload();
    advert.sheet_cont_2.preload();
    advert.sheet_cont_1.preload();
      //preload bg image;
    advert.base.preload();
    //preload white sheet animation;
    advert.sheet.preload();

        //preload the content
}





advert.init();


  

   


}

