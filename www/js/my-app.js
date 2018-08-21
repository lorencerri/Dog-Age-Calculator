// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    
    // Hide Status Bar
    StatusBar.hide();
    
});

// Element Function
function element(id) {
    return document.getElementById(id);
}

// Calculate Function

element('calc').addEventListener('click', function() {
    
    // Create Variables
    var input = element('humanYears').value;
    var years = 0;
    
    // 15 human years equals the first year of a medium-sized dog's life.
    if (input > 0) years += 15;
    
    // Year two for a dog equals about nine years for a human.
    if (input > 1) years += 9;
    
    // And after that, each human year would be approx. five years for a dog.
    if (input > 2) {
        years += 5 * (input - 2)
    }
    
    element('result').innerHTML = 'Your dog is ' + years + ' years old in dog years!';
})