HTML5 Banner

--------------------
Banner structure:
--------------------
banner /
		banner.json
	   /css/
	   		style.css
	   /img/
	   		base.jpg
	   	   /buttons/
	   	   		    cta.png
	   	   /captions/
	   	   			 captions_EN.png
	   	   			 captions_LOREM.png
	   	   /fallback/
	   	   			 nohtml5.jpg
	   	   /sheet/
	   	   		  white_sheet_A.png
	   	   		  white_sheet_B.ong
	   	   /sheet_cont_1/
	   	   				 sheet_cont_1_A.png
	   	   				 sheet_cont_1_B.png
	   	   /sheet_cont_2/
	   	   				 sheet_cont_2_A.png
	   	   				 sheet_cont_2_B.png
	   	   /sheet_cont_3/
	   	   				sheet_cont_3_A.png
	   	   /sheet_cont_4/
	   	   				 sheet_cont_4_A.png
	   	   			     sheet_cont_4_B.png
	   	   /toplayer/
	   	   			toplayer.png

----------------------
Localising the banner:
-----------------------

The copy for the banner is separated from  other graphic elements. All the copy for the English version is in one image 
		
		banner/img/captions/captions_EN.png

You can create your own localised version of the banner. In order to do so:

1. Make a copy of captions.psd and open the file in Photoshop.

2. captions.psd has 3 folders: 'Guides', 'English' and 'Generic'. Only 'English' is of any concern of any concern to you the other two are just helping files.

Click on the 'ENGLISH' folder and rename it depending on into which language you are localising the banner
to i.e German, French etc.

3. To edit copy for the first frame of the banner, double click the "smart-object" layer named '1st frame'. You should see a new dialogue window open. click ok. You should see a file open with the extension of .psb. Replace text in the text layer and save it. Go back to your psd file and you should see the changes reflected. Repeat the procedure for all the other frames until you have localised the banner.

4. Once you have finished editing captions.psd file click save for web and as saving setting choose PNG-24 with transparency box ticked. Save the png file to your banner location img/captions/ Keep the following naming convention, for example if  you are working on German version your file name would be captions_DE.png 


5. In order to use the new localised png file you need to edit the banner.json. Simply replace the current value of "captions_sprite" with the name of localised file. 

for example: "captions_sprite":"captions_DE.png";

6. To preview the banner it needs to be uploaded to the server. The banner will not work locally.


-----------------------
Edit JSON file
_______________________




captions_sprite - name of the file used for the particular version
the file with captions are in img/captions