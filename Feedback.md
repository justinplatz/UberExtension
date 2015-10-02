# UberExtension
Chrome Extension to Request an Uber

##About
What separates Uber from other products is the sheer convenience of using Uber. Simply pick up your phone, push a button, and 
your ride is on its way. However, without a phone, that convenience is seemingly lost. I set out on giving users
another super convenient way to request an Uber, by allowing them to use their Chrome Browser. 

By making a Chrome Extension I hoped to keep the convenienc of Uber, and keeping users within just 1 click of having a car. 


![demo](demo.gif)

##Technologies Used

* Uber API - for Car price and Time Estimates
* Google Maps API - for the map
* Good 'Ol Fashion HTML, CSS, JS

##How To Set It Up
You will NEED a Chrome Browser to run this app, as it is a Chrome Extension only. First, go ahead and clone the repo somewhere onto
your computer. Next in your chrome browser click the hamburger menu on the far right. Then click More Tools, Extensions. On that page
select Load Unpacked Extension and select the project. Now hopefully you should see the project appear in your Chrome Browser.

##Features
When you look at the app what you see is a seemingly fully functional Uber application where you can Log In or Sign Up to a Uber Account
and then you are just one click away from receiving your car. The app was intended to look fully functional even though not
everything is quite there. Right now, clicking Sign Up will not do anything, and clicking Log In will bring you to the Map view.
On the Map view you can drag a pin to your desitnation (or simply type and search for it) and on the button you see the actual 
price and time estimate of your trip. 

##Feedback
Working with the Uber API I was quickly surprised by the documentation provided to developers. As I had never used OAuth before,
I found myself struggling to set it up but could not find everything I was looking for from the Uber Docs. I was surprised to find that
the provided Python example did not compile, and even though Ruby and Node were also reccomended neither had any documentation or sample code.
If I were full time I would spend time thoroughly documenting the Uber in Node and Ruby so developers like myself who found themselves
struggling for official answers would have a place to look. 

There were several unofficial node packages which claimed to be wrappers for the Uber API but most were unreliable or also underdocumented.
I would love to see an easily accessible API so any and every developer could easily implement Uber into their App.

##Whats Next
Even though I struggled learning Node in just a couple days, I plan on finishing this project given more time. After that:

* Log In / Sign Up to Uber Account
* Request, Cancel, Check Status of Ride
* Store user premissions for repeated use
* Distribute to Google Play store 
