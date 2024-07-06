    // Add EventListener with DOM.
// This will listen to the event when the DOM content (HTML structure) of the webpage is fully loaded and ready to be "used".
document.addEventListener('DOMContentLoaded', function() { 

    // {Pulling in ID blogForm for the Function.
// This retrieves the form element with ID blogForm, and assigns it to the variable "form".
    const form = document.getElementById('blogForm');

    // Add EventListener with DOM.
// This will listen for when the form with ID blogForm is submitted.
    form.addEventListener('submit', function(event){

    // Add Event PreventDefault
// This will stop the browser navigating away from the current page or reloading it.
// More specifically, this will help handle form submission via Javascript without reloading the page.
        event.preventDefault();

    // Creating Variables for Form Fields
// This is done so that the if statement can function correctly.
// This will retrieve values entered in the form fields.
const username = form.elements['username'].value.trim(); // This will retrieve & trim username user input.
const title = form.elements['title'].value.trim(); // ...^ title user input
const content = form.elements['content'].value.trim(); // ...^ content user input

    // Add an if statement to make sure each field has been filled out.
// This is saying, if username is equal to blank, do this. (alert). OR if title is equal to blank then do this (alert). Same with content.
// In other words, if the if statement is true do this:
    if (username === '' || title === '' || content === '') {
        alert('Error, please fill out all form fields.');
        return; // Return will stop further execution of the function. This will basically stop the form from being submitted.
    
    // Else Statement
// So basically if all of the fields have user input this alert will happen instead.
// This says if the if statement is false, do this: 
} else {
    alert('Your blog has been successfully added!');
        }
    });
});