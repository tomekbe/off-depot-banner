//
//* tomasz bartkowiak - saatchi masius  2014 */
//

// -- create a namespace for add -- /
var advert = {};
// base is a background which never changes
advert.base ={}; 

// advert.sheet is a white paper sheet animation;
advert.sheet ={};

advert.sheet_cont_1 = {};
//advert.sheet_cont_1.ready = false;


advert.sheet_2 = {};
advert.sheet_cont_2 = {};


advert.sheet_3 = {};
advert.sheet_cont_3 = {};


advert.sheet_4 = {};
advert.sheet_cont_4 = {};


advert.buttons = {};
//advert.buttons.ready = false;

advert.toplayer = {};



advert.caption_1 = {};

advert.captions_loc =userDefined.captions_loc;
advert.cta_loc=userDefined.cta_loc;
advert.slideDisplayDuration =userDefined.slide_duration;

// half of the flash framerate;
var frameRate =24;

// in milliseconds;
var slideDisplayTime = 50;


window.onload = function () 

{


   /*advert.initialiseJSON = function (f) {
    $.getJSON( "banner.json", function( data ) {
         var items = [];
         advert.captions_loc = data.captions_sprite;
         advert.slideDisplayDuration = data.slide_duration;
         advert.cta_loc = data.cta_sprite;
        
          f();
    });

    
   } */

   advert.initialiseObjects = function () {
    // call JSON




	//start

	advert.base.ADD_WIDTH = 756; 
    advert.base.ADD_HEIGHT = 150;        
       
    advert.base.canvas = document.getElementById('add');
    advert.base.c = advert.base.canvas.getContext('2d');
         
    advert.base.canvas.width = advert.base.ADD_WIDTH;
    advert.base.canvas.height = advert.base.ADD_HEIGHT;


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

    /*---- slide content 1 ---- */
    advert.sheet_cont_1.ADD_WIDTH = 756; 
    advert.sheet_cont_1.ADD_HEIGHT = 150;        
       
    advert.sheet_cont_1.canvas = document.getElementById('sheet_cont_1');
    advert.sheet_cont_1.c = advert.sheet_cont_1.canvas.getContext('2d');
         
    advert.sheet_cont_1.canvas.width = advert.sheet_cont_1.ADD_WIDTH;
    advert.sheet_cont_1.canvas.height = advert.sheet_cont_1.ADD_HEIGHT;
    
    advert.sheet_cont_1.index =0;
    advert.sheet_cont_1.frame =1;
    advert.sheet_cont_1.xpos = advert.sheet_cont_1.ypos = 0;
    advert.sheet_cont_1.numFrames = 20;


    /*-------- WHITE SHEET 2-------- */

    advert.sheet_2.ADD_WIDTH = 756; 
    advert.sheet_2.ADD_HEIGHT = 150;        
       
    advert.sheet_2.canvas = document.getElementById('sheet_2');
    advert.sheet_2.c = advert.sheet_2.canvas.getContext('2d');
         
    advert.sheet_2.canvas.width = advert.sheet_2.ADD_WIDTH;
    advert.sheet_2.canvas.height = advert.sheet_2.ADD_HEIGHT;
    advert.sheet_2.index =0;

    /*---- slide content 2 ---- */
    advert.sheet_cont_2.ADD_WIDTH = 756; 
    advert.sheet_cont_2.ADD_HEIGHT = 150;        
       
    advert.sheet_cont_2.canvas = document.getElementById('sheet_cont_2');
    advert.sheet_cont_2.c = advert.sheet_cont_2.canvas.getContext('2d');
         
    advert.sheet_cont_2.canvas.width = advert.sheet_cont_2.ADD_WIDTH;
    advert.sheet_cont_2.canvas.height = advert.sheet_cont_2.ADD_HEIGHT;
    advert.sheet_cont_2.index =0;


    advert.sheet_cont_2.frame =1;
    advert.sheet_cont_2.xpos = advert.sheet_cont_2.ypos = 0;
    advert.sheet_cont_2.numFrames = 20;


/*-------- WHITE SHEET 3-------- */

    advert.sheet_3.ADD_WIDTH = 756; 
    advert.sheet_3.ADD_HEIGHT = 150;        
       
    advert.sheet_3.canvas = document.getElementById('sheet_3');
    advert.sheet_3.c = advert.sheet_3.canvas.getContext('2d');
         
    advert.sheet_3.canvas.width = advert.sheet_3.ADD_WIDTH;
    advert.sheet_3.canvas.height = advert.sheet_3.ADD_HEIGHT;
    advert.sheet_3.index =0;



 /*---- slide content 3 ---- */
    advert.sheet_cont_3.ADD_WIDTH = 756; 
    advert.sheet_cont_3.ADD_HEIGHT = 150;        
       
    advert.sheet_cont_3.canvas = document.getElementById('sheet_cont_3');
    advert.sheet_cont_3.c = advert.sheet_cont_3.canvas.getContext('2d');
         
    advert.sheet_cont_3.canvas.width = advert.sheet_cont_3.ADD_WIDTH;
    advert.sheet_cont_3.canvas.height = advert.sheet_cont_3.ADD_HEIGHT;
    advert.sheet_cont_3.index =0;

    advert.sheet_cont_3.frame =1;
    advert.sheet_cont_3.xpos = advert.sheet_cont_3.ypos = 0;
    advert.sheet_cont_3.numFrames = 22;


/*-------- WHITE SHEET 4-------- */

    advert.sheet_4.ADD_WIDTH = 756; 
    advert.sheet_4.ADD_HEIGHT = 150;        
       
    advert.sheet_4.canvas = document.getElementById('sheet_4');
    advert.sheet_4.c = advert.sheet_4.canvas.getContext('2d');
         
    advert.sheet_4.canvas.width = advert.sheet_4.ADD_WIDTH;
    advert.sheet_4.canvas.height = advert.sheet_4.ADD_HEIGHT;
    advert.sheet_4.index =0;

 
/*---- slide content 4 ---- */
    advert.sheet_cont_4.ADD_WIDTH = 756; 
    advert.sheet_cont_4.ADD_HEIGHT = 150;        
       
    advert.sheet_cont_4.canvas = document.getElementById('sheet_cont_4');
    advert.sheet_cont_4.c = advert.sheet_cont_4.canvas.getContext('2d');
         
    advert.sheet_cont_4.canvas.width = advert.sheet_cont_4.ADD_WIDTH;
    advert.sheet_cont_4.canvas.height = advert.sheet_cont_4.ADD_HEIGHT;
    advert.sheet_cont_4.index =0;

    advert.sheet_cont_4.frame =1;
    advert.sheet_cont_4.xpos = advert.sheet_cont_4.ypos = 0;
    advert.sheet_cont_4.numFrames = 20;



//*** caption_1

    advert.caption_1.ADD_WIDTH = 756; 
    advert.caption_1.ADD_HEIGHT = 150;        
       
    advert.caption_1.canvas = document.getElementById('caption_1');
    advert.caption_1.c = advert.caption_1.canvas.getContext('2d');
         
    advert.caption_1.canvas.width = advert.caption_1.ADD_WIDTH;
    advert.caption_1.canvas.height = advert.caption_1.ADD_HEIGHT;



//***toplayer

    advert.toplayer.ADD_WIDTH = 756; 
    advert.toplayer.ADD_HEIGHT = 150;        
       
    advert.toplayer.canvas = document.getElementById('toplayer');
    advert.toplayer.c = advert.toplayer.canvas.getContext('2d');
         
    advert.toplayer.canvas.width = advert.toplayer.ADD_WIDTH;
    advert.toplayer.canvas.height = advert.toplayer.ADD_HEIGHT;


     //*** buttons

    advert.buttons.ADD_WIDTH = 151; 
    advert.buttons.ADD_HEIGHT = 32;        
       
    advert.buttons.canvas = document.getElementById('button-cta');
    advert.buttons.c = advert.buttons.canvas.getContext('2d');
         
    advert.buttons.canvas.width = advert.buttons.ADD_WIDTH;
    advert.buttons.canvas.height = advert.buttons.ADD_HEIGHT;



}

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
			//console.log("background image --  loaded");
	
            advert.base.ready = true;
		    advert.checkAssetsLoaded ();

    	}

    }


    //draw this frame

    advert.base.drawFrame  = function () {

    	advert.base.ffp =  setTimeout(function () {

    		advert.base.request  = requestAnimationFrame(advert.base.drawFrame, advert.base.canvas);
    		advert.base.c.clearRect(0,0, advert.base.ADD_WIDTH, advert.base.ADD_HEIGHT);
    		advert.base.c.drawImage(advert.base.resources[0],0,0, 756,150,0,0,756,150);
    		//console.log("--background base drawn --");
    		cancelAnimationFrame(advert.base.request);
    	}, 1000/frameRate)
    	//only once
    	




    }




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
			//console.log("white sheet sequence - loaded");
			//start the action here;
              advert.sheet.ready = true;
			//advert.sheet.drawFrame();
            advert.checkAssetsLoaded ();

                        // forcing Chrome to keep the image in cache for smooth playback;
            var  decodeCanvas = document.createElement('canvas');
            var dectodeCtx = decodeCanvas.getContext('2d');
            decodeCanvas.width = advert.sheet.resources[1].width;
            decodeCanvas.height = advert.sheet.resources[1].height;
            dectodeCtx.drawImage(advert.sheet.resources[1], 0, 0);


    	}

    }



    advert.sheet.animateWhiteSheet  = function (sh) {

    // first check if the there is anything to draw
    if(advert.sheet.index<advert.sheet.totalToLoad) {
       // console.log("drawing the white sheet of paper", advert.sheet.index, advert.sheet.frame, advert.sheet.xpos, advert.sheet.ypos);
        sh.c.clearRect(0,0, advert.sheet.ADD_WIDTH, advert.sheet.ADD_HEIGHT);
        sh.c.drawImage(advert.sheet.resources[advert.sheet.index],advert.sheet.xpos,advert.sheet.ypos,756,150,0,0,756,150);
        advert.sheet.xpos += 756;
        advert.sheet.frame += 1; 

        if (advert.sheet.frame >= advert.sheet.numFrames) {
                        advert.sheet.xpos =0;
                        advert.sheet.ypos =0;
                        advert.sheet.frame=0;  
                        
                        if(advert.sheet.index<advert.sheet.totalToLoad-1) {
                            advert.sheet.index++;  
                        }
                    //if we've gotten to the limit of our source image's width, we need to move down one row of frames              
                    } else if (advert.sheet.xpos + 756 > advert.sheet.resources[advert.sheet.index].width){
                       advert.sheet.xpos =0;
                       advert.sheet.ypos += 150;
                    }

    } 
    else if(advert.sheet.index>=advert.sheet.totalToLoad) {
           // console.log("not drawing the white sheet of paper anymeor", advert.sheet.index, advert.sheet.totalToLoad)
            //sh.index = 0;
            //advert.sheet.index = 0;
        
        } 

    }



    advert.chromeCacheHack = function (obj) {



    }







    // preload all the images;

    advert.sheet_cont_1.preload = function () {

	    advert.sheet_cont_1.loaded = 0;
        advert.sheet_cont_1.ready = false;
	    advert.sheet_cont_1.totalToLoad = 2;
	    advert.sheet_cont_1.path = 'img/sheet_cont_1/';
	    advert.sheet_cont_1.images = ['sheet_cont_1_A.png','sheet_cont_1_B.png'];
        advert.sheet_cont_1.resources = new Array();
        advert.sheet_cont_1.chResources = new Array();

	    for (image in advert.sheet_cont_1.images) {

	       
	    	var ni = new Image();
	    	ni.src = advert.sheet_cont_1.path + advert.sheet_cont_1.images[image];
            //console.log(ni);
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
			//console.log("slide_1 content  -- loaded");
			//start the action here;

			//advert.sheet_cont_1.drawFrame();
            advert.sheet_cont_1.ready = true;
            advert.checkAssetsLoaded ();


            // forcing Chrome to keep the image in cache for smooth playback;
            var  decodeCanvas = document.createElement('canvas');
            var dectodeCtx = decodeCanvas.getContext('2d');
            decodeCanvas.width = advert.sheet_cont_1.resources[1].width;
            decodeCanvas.height = advert.sheet_cont_1.resources[1].height;
            dectodeCtx.drawImage(advert.sheet_cont_1.resources[1], 0, 0);

        

    	}

    }


    //draw this frame

    advert.sheet_cont_1.drawFrame  = function () {

        //console.log("++");
    	advert.sheet_cont_1.ffp =  setTimeout(function () {

    		
    	
           
            if(advert.sheet_cont_1.index>=advert.sheet_cont_1.totalToLoad) {

                  //console.log("the end of spritesheet iteration");
                  //advert.sheet_cont_1.index = 0;
                  cancelAnimationFrame(advert.sheet_cont_1.request);

                  // makes a delay of 2 seconds
                  advert.sheet.index=0;advert.sheet.frame=0; advert.sheet.xpos=0; advert.sheet.ypos =0;
                  advert.sheet_cont_1.timer = setTimeout(
                        function() { 
                            //advert.sheet_cont_2.drawFrame()
                             advert.caption_1.drawFrame(0);
                             advert.showCaption1(function() { 
                                advert.hideCaption1(
                                                    function() {console.log("the end of hiding the caption")
                                                         advert.caption_1.c.clearRect(0,0, advert.caption_1.ADD_WIDTH, advert.caption_1.ADD_HEIGHT);
                                                        advert.sheet_cont_2.drawFrame()
                                                    } 
                                                   ) 
                             });


                  }, slideDisplayTime);
                    
            }

            if(advert.sheet_cont_1.index<=advert.sheet_cont_1.totalToLoad-1) {
                //perform
                advert.sheet.animateWhiteSheet(advert.sheet);
                advert.sheet_cont_1.request  = requestAnimationFrame(advert.sheet_cont_1.drawFrame, advert.sheet_cont_1.canvas);
                advert.sheet_cont_1.c.clearRect(0,0, advert.sheet_cont_1.ADD_WIDTH, advert.sheet_cont_1.ADD_HEIGHT);
                advert.sheet_cont_1.c.drawImage(advert.sheet_cont_1.resources[advert.sheet_cont_1.index],advert.sheet_cont_1.xpos,advert.sheet_cont_1.ypos,756,150,0,0,756,150);

                       //>     Sprite Sheet iteration
                    
                    //each time around we add the frame size to our xpos, moving along the source image
                    advert.sheet_cont_1.xpos += 756;
                    //increase the frame so we know which frame of our animation we are currently on
                    advert.sheet_cont_1.frame += 1;
                    //if our index is higher than our total number of frames, we're at the end and better start over
                    if (advert.sheet_cont_1.frame >= advert.sheet_cont_1.numFrames+1) {
                       // console.log("first image finished");
                        advert.sheet_cont_1.xpos =0;
                        advert.sheet_cont_1.ypos =0;
                        advert.sheet_cont_1.frame=1;  
                        
                        //if(advert.sheet_cont_1.index<advert.sheet_cont_1.totalToLoad-1) {}
                        advert.sheet_cont_1.index++;  
                        
                        

                    //if we've gotten to the limit of our source image's width, we need to move down one row of frames              
                    } else if (advert.sheet_cont_1.xpos + 756 > advert.sheet_cont_1.resources[advert.sheet_cont_1.index].width){
                       //  console.log("moving down");

                       advert.sheet_cont_1.xpos =0;
                       advert.sheet_cont_1.ypos += 150;
                    }

                //console.log(advert.sheet_cont_1.index,advert.sheet_cont_1.totalToLoad, advert.sheet_cont_1.frame, "iteration");

            //> The end of spritesheet iteration
            }
         
           
        }, 1000/frameRate)
    
    	




    }



    // preload all the images;

    advert.sheet_cont_2.preload = function () {

        advert.sheet_cont_2.loaded = 0;
        advert.sheet_cont_2.ready = false;
        advert.sheet_cont_2.totalToLoad = 2;
        advert.sheet_cont_2.path = 'img/sheet_cont_2/';
        advert.sheet_cont_2.images = ['sheet_cont_2_A.png','sheet_cont_2_B.png'];
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
            
            //start the action here;

            //advert.sheet_cont_1.drawFrame();
            advert.sheet_cont_2.ready = true;
            advert.checkAssetsLoaded ();

            // forcing Chrome to keep the image in cache for smooth playback;
            var  decodeCanvas = document.createElement('canvas');
            var dectodeCtx = decodeCanvas.getContext('2d');
            decodeCanvas.width = advert.sheet_cont_2.resources[1].width;
            decodeCanvas.height = advert.sheet_cont_2.resources[1].height;
            dectodeCtx.drawImage(advert.sheet_cont_2.resources[1], 0, 0);

           /* var  decodeCanvas2 = document.createElement('canvas');
            var dectodeCtx2 = decodeCanvas2.getContext('2d');
            decodeCanvas2.width = advert.sheet_cont_2.resources[2].width;
            decodeCanvas2.height = advert.sheet_cont_2.resources[2].height;
            dectodeCtx2.drawImage(advert.sheet_cont_2.resources[2], 0, 0); */
        }

    }


    //draw this frame

    advert.sheet_cont_2.drawFrame  = function () {

        advert.sheet_cont_2.ffp =  setTimeout(function () {

            
        
           
            if(advert.sheet_cont_2.index>=advert.sheet_cont_2.totalToLoad) {

                
                  //advert.sheet_cont_1.index = 0;
                  cancelAnimationFrame(advert.sheet_cont_2.request);

                  // makes a delay of 2 seconds
                  advert.sheet.index=0;advert.sheet.frame=0; advert.sheet.xpos=0; advert.sheet.ypos =0;
                  //advert.sheet_cont_2.timer = setTimeout(function() {advert.sheet_cont_3.drawFrame()}, slideDisplayTime);

                        advert.sheet_cont_2.timer = setTimeout(
                        function() { 
                            //advert.sheet_cont_2.drawFrame()
                             advert.caption_1.drawFrame(1);
                             advert.showCaption1(function() { 
                                advert.hideCaption1(
                                                    function() {console.log("the end of hiding the caption")
                                                        advert.caption_1.c.clearRect(0,0, advert.caption_1.ADD_WIDTH, advert.caption_1.ADD_HEIGHT);
                                                        advert.sheet_cont_3.drawFrame()
                                                    } 
                                                   ) 
                             });


                  }, slideDisplayTime);
                    
            }

            if(advert.sheet_cont_2.index<=advert.sheet_cont_2.totalToLoad-1) {
                //perform
                advert.sheet.animateWhiteSheet(advert.sheet_2);
                advert.sheet_cont_2.request  = requestAnimationFrame(advert.sheet_cont_2.drawFrame, advert.sheet_cont_2.canvas);
                advert.sheet_cont_2.c.clearRect(0,0, advert.sheet_cont_2.ADD_WIDTH, advert.sheet_cont_2.ADD_HEIGHT);
                advert.sheet_cont_2.c.drawImage(advert.sheet_cont_2.resources[advert.sheet_cont_2.index],advert.sheet_cont_2.xpos,advert.sheet_cont_2.ypos,756,150,0,0,756,150);

                       //>     Sprite Sheet iteration
                    
                    //each time around we add the frame size to our xpos, moving along the source image
                    advert.sheet_cont_2.xpos += 756;
                    //increase the frame so we know which frame of our animation we are currently on
                    advert.sheet_cont_2.frame += 1;
                    //if our index is higher than our total number of frames, we're at the end and better start over
                    if (advert.sheet_cont_2.frame >= advert.sheet_cont_2.numFrames+1) {
                       // console.log("first image finished");
                        advert.sheet_cont_2.xpos =0;
                        advert.sheet_cont_2.ypos =0;
                        advert.sheet_cont_2.frame=1;  
                        
                        //if(advert.sheet_cont_1.index<advert.sheet_cont_1.totalToLoad-1) {}
                        advert.sheet_cont_2.index++;  
                        
                        

                    //if we've gotten to the limit of our source image's width, we need to move down one row of frames              
                    } else if (advert.sheet_cont_2.xpos + 756 > advert.sheet_cont_2.resources[advert.sheet_cont_2.index].width){
                       //  console.log("moving down");

                       advert.sheet_cont_2.xpos =0;
                       advert.sheet_cont_2.ypos += 150;
                    }

                //console.log(advert.sheet_cont_2.index,advert.sheet_cont_2.totalToLoad, advert.sheet_cont_2.frame, "iteration2");

            //> The end of spritesheet iteration
            }
         
           
         

    


            

          
        }, 1000/frameRate)
 
        




    }



    // preload all the images;

    advert.sheet_cont_3.preload = function () {

        advert.sheet_cont_3.loaded = 0;
        advert.sheet_cont_3.ready = false;
        advert.sheet_cont_3.totalToLoad = 1;
        advert.sheet_cont_3.path = 'img/sheet_cont_3/';
        advert.sheet_cont_3.images = ['sheet_cont_3_A.png'];
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
           
            

         
            advert.sheet_cont_3.ready = true;
            advert.checkAssetsLoaded ();

          

     

        }

    }


    //draw this frame

    advert.sheet_cont_3.drawFrame  = function () {

           advert.sheet_cont_3.ffp =  setTimeout(function () {

            
        
           
            if(advert.sheet_cont_3.index>=advert.sheet_cont_3.totalToLoad) {

                  //console.log("the end of spritesheet iteration");
                  //advert.sheet_cont_1.index = 0;
                  cancelAnimationFrame(advert.sheet_cont_3.request);

                  // makes a delay of 2 seconds
                  advert.sheet.index=0;advert.sheet.frame=0; advert.sheet.xpos=0; advert.sheet.ypos =0;
                  //advert.sheet_cont_3.timer = setTimeout(function() {advert.sheet_cont_4.drawFrame()}, slideDisplayTime+1000);
                  advert.sheet_cont_3.timer = setTimeout(
                        function() { 
                            //advert.sheet_cont_2.drawFrame()
                             advert.caption_1.drawFrame(2);
                             advert.showCaption1(function() { 
                                advert.hideCaption1(
                                                    function() {console.log("the end of hiding the caption")
                                                    advert.caption_1.c.clearRect(0,0, advert.caption_1.ADD_WIDTH, advert.caption_1.ADD_HEIGHT);
                                                        advert.sheet_cont_4.drawFrame()
                                                    } 
                                                   ) 
                             });


                  }, slideDisplayTime);
                    
            }

            if(advert.sheet_cont_3.index<=advert.sheet_cont_3.totalToLoad-1) {
                //perform
                advert.sheet.animateWhiteSheet(advert.sheet_3);
                advert.sheet_cont_3.request  = requestAnimationFrame(advert.sheet_cont_3.drawFrame, advert.sheet_cont_3.canvas);
                advert.sheet_cont_3.c.clearRect(0,0, advert.sheet_cont_3.ADD_WIDTH, advert.sheet_cont_3.ADD_HEIGHT);
                advert.sheet_cont_3.c.drawImage(advert.sheet_cont_3.resources[advert.sheet_cont_3.index],advert.sheet_cont_3.xpos,advert.sheet_cont_3.ypos,756,150,0,0,756,150);

                       //>     Sprite Sheet iteration
                    
                    //each time around we add the frame size to our xpos, moving along the source image
                    advert.sheet_cont_3.xpos += 756;
                    //increase the frame so we know which frame of our animation we are currently on
                    advert.sheet_cont_3.frame += 1;
                    //if our index is higher than our total number of frames, we're at the end and better start over
                    if (advert.sheet_cont_3.frame >= advert.sheet_cont_3.numFrames+1) {
                       // console.log("first image finished");
                        advert.sheet_cont_3.xpos =0;
                        advert.sheet_cont_3.ypos =0;
                        advert.sheet_cont_3.frame=1;  
                        
                        //if(advert.sheet_cont_1.index<advert.sheet_cont_1.totalToLoad-1) {}
                        advert.sheet_cont_3.index++;  
                        
                        

                    //if we've gotten to the limit of our source image's width, we need to move down one row of frames              
                    } else if (advert.sheet_cont_3.xpos + 756 > advert.sheet_cont_3.resources[advert.sheet_cont_3.index].width){
                       //  console.log("moving down");

                       advert.sheet_cont_3.xpos =0;
                       advert.sheet_cont_3.ypos += 150;
                    }

                //console.log(advert.sheet_cont_3.index,advert.sheet_cont_3.totalToLoad, advert.sheet_cont_3.frame, "iteration3");

            //> The end of spritesheet iteration
            }
         
           
         

    


            

          
        }, 1000/frameRate)
 



    }



    // preload all the images;

    advert.sheet_cont_4.preload = function () {

        advert.sheet_cont_4.loaded = 0;
         advert.sheet_cont_4.ready = false;
        advert.sheet_cont_4.totalToLoad = 2;
        advert.sheet_cont_4.path = 'img/sheet_cont_4/';
        advert.sheet_cont_4.images = ['sheet_cont_4_A.png','sheet_cont_4_B.png'];
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
            
            //start the action here;

            //advert.sheet_cont_1.drawFrame();
            advert.sheet_cont_4.ready = true;
            advert.checkAssetsLoaded ();

              // forcing Chrome to keep the image in cache for smooth playback;
            var  decodeCanvas = document.createElement('canvas');
            var dectodeCtx = decodeCanvas.getContext('2d');
            decodeCanvas.width = advert.sheet_cont_4.resources[1].width;
            decodeCanvas.height = advert.sheet_cont_4.resources[1].height;
            dectodeCtx.drawImage(advert.sheet_cont_4.resources[1], 0, 0);

        }

    }


    //draw this frame

    advert.sheet_cont_4.drawFrame  = function () {

        advert.sheet_cont_4.ffp =  setTimeout(function () {

            
        
           
            if(advert.sheet_cont_4.index>=advert.sheet_cont_4.totalToLoad) {

                 //advert.sheet_cont_1.index = 0;
                  cancelAnimationFrame(advert.sheet_cont_4.request);


                  // makes a delay of 2 seconds
                  advert.sheet.index=0;advert.sheet.frame=0; advert.sheet.xpos=0; advert.sheet.ypos =0;
                 // advert.sheet_cont_1.timer = setTimeout(function() {advert.sheet_cont_2.drawFrame()}, 2000);
                 
                 advert.showButton(), 

                        advert.sheet_cont_4.timer = setTimeout(
                        function() { 
                            //advert.sheet_cont_2.drawFrame()
                             advert.caption_1.drawFrame(3);
                             advert.showCaption1(function() { 
                               console.log("---")
                             });


                  }, slideDisplayTime);  
            }

            if(advert.sheet_cont_4.index<=advert.sheet_cont_4.totalToLoad-1) {
                //perform
                advert.sheet.animateWhiteSheet(advert.sheet_4);
                advert.sheet_cont_4.request  = requestAnimationFrame(advert.sheet_cont_4.drawFrame, advert.sheet_cont_4.canvas);
                advert.sheet_cont_4.c.clearRect(0,0, advert.sheet_cont_4.ADD_WIDTH, advert.sheet_cont_4.ADD_HEIGHT);
                advert.sheet_cont_4.c.drawImage(advert.sheet_cont_4.resources[advert.sheet_cont_4.index],advert.sheet_cont_4.xpos,advert.sheet_cont_4.ypos,756,150,0,0,756,150);

                       //>     Sprite Sheet iteration
                    
                    //each time around we add the frame size to our xpos, moving along the source image
                    advert.sheet_cont_4.xpos += 756;
                    //increase the frame so we know which frame of our animation we are currently on
                    advert.sheet_cont_4.frame += 1;
                    //if our index is higher than our total number of frames, we're at the end and better start over
                    if (advert.sheet_cont_4.frame >= advert.sheet_cont_4.numFrames+1) {
                       // console.log("first image finished");
                        advert.sheet_cont_4.xpos =0;
                        advert.sheet_cont_4.ypos =0;
                        advert.sheet_cont_4.frame=1;  
                        
                        //if(advert.sheet_cont_1.index<advert.sheet_cont_1.totalToLoad-1) {}
                        advert.sheet_cont_4.index++;  
                        
                        

                    //if we've gotten to the limit of our source image's width, we need to move down one row of frames              
                    } else if (advert.sheet_cont_4.xpos + 756 > advert.sheet_cont_4.resources[advert.sheet_cont_4.index].width){
                       //  console.log("moving down");

                       advert.sheet_cont_4.xpos =0;
                       advert.sheet_cont_4.ypos += 150;
                    }

                //console.log(advert.sheet_cont_4.index,advert.sheet_cont_4.totalToLoad, advert.sheet_cont_4.frame, "iteration4");

            //> The end of spritesheet iteration
            }
         
           
         

    


            

          
        }, 1000/frameRate)
 
        




    }




   

    // preload all the images;

    advert.buttons.preload = function () {
        advert.buttons.loaded = 0;
        advert.buttons.totalToLoad = 1; 
        advert.buttons.ready = false;
        advert.buttons.path = 'img/buttons/';
        advert.buttons.images = [advert.cta_loc];
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
             //console.log("buttons image --  drawn");
        }, 1000/frameRate)
        //only once
        




    }




    advert.caption_1.preload = function () {

        advert.caption_1.loaded = 0;
        advert.caption_1.totalToLoad = 1; 
        advert.caption_1.ready = false;
        advert.caption_1.path = 'img/captions/';
        console.log(advert.captions_loc +"----");
        advert.caption_1.images = [advert.captions_loc];
        advert.caption_1.resources = new Array();



        for (image in advert.caption_1.images) {

            var ni = new Image();
            ni.src = advert.caption_1.path + advert.caption_1.images[image];
            advert.caption_1.resources.push(ni);

            advert.caption_1.resources[image].onload = function() {
                advert.caption_1.loaded ++ ;
                advert.caption_1.loadingProgressCheck(advert.caption_1.loaded);
            }


        }

    }


    // progress check
    advert.caption_1.loadingProgressCheck = function(l) {

        if(l==this.totalToLoad) {
            //console.log("caption image --  loaded");
            //start the action here;
            advert.caption_1.ready = true;
            advert.checkAssetsLoaded ();
            //advert.buttons.drawFrame();

        }

    }

        //draw this frame

    advert.caption_1.drawFrame  = function (n) {

        advert.caption_1.ffp =  setTimeout(function () {
           
            advert.caption_1.request  = requestAnimationFrame(advert.caption_1.drawFrame, advert.caption_1.canvas);
            advert.caption_1.c.clearRect(0,0, advert.caption_1.ADD_WIDTH, advert.caption_1.ADD_HEIGHT);
            advert.caption_1.c.drawImage(advert.caption_1.resources[0],0,n*150, 756,150,0,0,756,150)
       
            cancelAnimationFrame(advert.caption_1.request);
            //console.log("caption_1 image --  drawn");
            //advert.hideCaption1();
        }, 1000/frameRate)
        //only once
        




    }




    advert.toplayer.preload = function () {

        advert.toplayer.loaded = 0;
        advert.toplayer.totalToLoad = 1; 
        advert.toplayer.ready = false;
        advert.toplayer.path = 'img/toplayer/';
        advert.toplayer.images = ['toplayer.png'];
        advert.toplayer.resources = new Array();



        for (image in advert.toplayer.images) {

            var ni = new Image();
            ni.src = advert.toplayer.path + advert.toplayer.images[image];

            advert.toplayer.resources.push(ni);

            advert.toplayer.resources[image].onload = function() {
                advert.toplayer.loaded ++ ;
                advert.toplayer.loadingProgressCheck(advert.toplayer.loaded);
            }


        }

    }


    // progress check
    advert.toplayer.loadingProgressCheck = function(l) {

        if(l==this.totalToLoad) {
            //console.log("toplayer image --  loaded");
            //start the action here;
            advert.toplayer.ready = true;
            advert.checkAssetsLoaded ();
            //advert.buttons.drawFrame();

        }

    }

        //draw this frame

    advert.toplayer.drawFrame  = function () {

        advert.toplayer.ffp =  setTimeout(function () {

            advert.toplayer.request  = requestAnimationFrame(advert.toplayer.drawFrame, advert.toplayer.canvas);
            advert.toplayer.c.clearRect(0,0, advert.toplayer.ADD_WIDTH, advert.toplayer.ADD_HEIGHT);
            advert.toplayer.c.drawImage(advert.toplayer.resources[0],0,0, 756,150,0,0,756,150)
       
            cancelAnimationFrame(advert.toplayer.request);
             //console.log("toplayer image --  drawn");
        }, 1000/frameRate)
        //only once
        




    }



//**************************************//
// general functions in advert namespace

advert.canvasSupport = function () {
    
    return !!document.createElement('canvas').getContext;
}

advert.showButton = function () {

var button = document.getElementById('button-cta'); //or use jQuery's $("#photo")
//TweenLite.to(button, 2, css:{top:"20px", backgroundColor:"#FF0000"},);
TweenLite.to(button, 1, {css:{left:"590px"}});
//console.log("showing the button");

}

/*advert.hideCaption1 = function  () {
 var caption1 = document.getElementById('caption_1');
 TweenLite.to(caption_1, 0, {autoAlpha:0});

} */

advert.showCaption1 = function (f) {

 var caption1 = document.getElementById('caption_1');
 TweenLite.to(document.getElementById('caption_1'), 1, {autoAlpha:1, delay:0, onComplete:f});



}

advert.hideCaption1 = function (f) {

 var caption1 = document.getElementById('caption_1');
 TweenLite.to(document.getElementById('caption_1'), 1, {autoAlpha:0, delay:advert.slideDisplayDuration, onComplete:f});



}

advert.checkAssetsLoaded = function () {
 

 var flag = true;
 var arr = new Array (advert.base.ready,
         advert.sheet.ready ,
         advert.sheet_cont_1.ready ,
         advert.sheet_cont_2.ready,
         advert.sheet_cont_3.ready,
         advert.sheet_cont_4.ready,
         advert.toplayer.ready,
         advert.buttons.ready) 




// if anything of it is not loaded it turns of the flah true to false.
// it will be only true if ever single thing is loaded 
        for (a in arr) {
            if (arr[a] ==false) {
                flag = false;
            } 
        }

    if(flag==true) {
        // this is only true 
        // playback time if it is true
        
        advert.playBanner();
    } else if (flag==false) {
        // changes flag to false so 

    }

}

advert.playBanner = function () {


    advert.base.drawFrame();
    //advert.sheet.drawFrame();
    advert.sheet_cont_1.drawFrame();
    advert.buttons.drawFrame();

    advert.toplayer.drawFrame();
    // starts withe the first frame 
   


}

// ******** init ***//

advert.init = function () {

   // advert.initialiseJSON(function() {})

           advert.initialiseObjects();
          //preload bg image;
    advert.base.preload();
    //preload white sheet animation;
    advert.sheet.preload();

    advert.toplayer.preload();

    advert.caption_1.preload();
    advert.buttons.preload();
   // advert.sheet_cont_5.preload();
    advert.sheet_cont_4.preload();
    advert.sheet_cont_3.preload();
    advert.sheet_cont_2.preload();
    advert.sheet_cont_1.preload();
    
 


        //preload the content
}


// check first if the canvas is supported at all

if(advert.canvasSupport()===true) {

    
    //plays the ad only if the canvas is supported
    advert.init();
} else if(advert.canvasSupport()===false) {


    //canvas is not supported and fallback image is injected into canvas
    document.getElementById('add-wrapper').innerHTML="<img src=\"img/fallback/nohtml5.jpg\" width=\"756\" height=\"150\" alt=\"html5 fallback\" />";

    
}




  

   


}

