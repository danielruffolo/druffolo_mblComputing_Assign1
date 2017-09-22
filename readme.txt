Daniel Ruffolo 214231656
Moblile Computing Assignment 2
Crypto-Forums
Forums app

github repo-link:
https://github.com/druffolo/druffolo_mblComputing_Assign1.git
Henry has been added to the repo as a contributer from user (druffolo)

App is android Ready and IOS compatable

FUNCTIONS THAT I WOULD LIKE TO BE GRADED FOR

-create thread(Post to DB)
-create thread post(sing Dynamic coin api data)
-view thread (retrieve from DB)
-Comment on specific thread (post comment to specific thread)
-Regiser User to DB
-SHA256 hash password and store 
-Retrieve user from DB 
-Save logged in user data to local storage
-Deactivate/delete current user on choice

(note, my edit function has broken and has been taken out of the app, Happy to accept loss of marks!
Using the Limited API proved to be Challenging for editing single records   )


APP STRUCTURE
- The app was built using Ionic 3
- Structure is Highly similar to a Angular 2 project 

-Plugins - this cointains all external ionic corcova api's used 
- Resources - this contains the splash screens and the icons used for both android and IOS. I have generated them by importing 
the relevent library however have left them as defult generic 
-src- in here is the app itself. it emcompasss app which is the actual initialisation of the ionic app and components
-models- this enclsoes the model for the thread and comment objects
pages- in here is where each component(page)of the app is located.
-providers- in here are our api helpers, their is one for datastore and one for currencies api. 
-services- in here ae the objec services. upon creating a object, it uses the service configuration before
posting to db
-index.html- this is where the app imports required packages such as cordova







TO  Emulate in browser:
ionic serve


TO INSTALL:

If you dont have ionic installed, just open the directory in terminal and write npm install

This has allready been done: ionic cordova platform add android or ios


Build the project:
ionic cordova build android or ios


To build and run the application on an Android device connected to your computer using a USB cable:

ionic cordova run android or ios

To build and run the application in the Android emulator:

ionic cordova emulate android or ios
