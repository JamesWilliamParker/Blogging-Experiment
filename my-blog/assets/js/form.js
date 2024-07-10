// THE FLOW
// Use DOMS for control.
// Check user input on all fields with if else statement.
// Prompt user of success or error on form submission.
// Use localstorage to statically hold any blog data.

            // Add EventListener with DOM.
                                        // This will listen to the event when the DOM content (HTML structure) of the webpage is fully loaded and ready to be "used".
document.addEventListener('DOMContentLoaded', function() { 

            // Pulling in ID blogForm for the Function.
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
                                        // Trim is used so when in developer tools>console, the user input is trimmed making it easier to view.
const username = form.elements['username'].value.trim(); // This will retrieve & trim username user input.
const title = form.elements['title'].value.trim(); // ...^ title user input
const content = form.elements['content'].value.trim(); // ...^ content user input

            // If Statement for field input
                                        // This is saying, if username is equal to blank, do this. (alert). OR if title is equal to blank then do this (alert). Same with content.
                                        // In other words, if the if statement is true do this:
    if (username === '' || title === '' || content === '') {
        alert('Error, please fill out all form fields.');
        return; // Return will stop further execution of the function. This will basically stop the form from being submitted.
    
            // Else Statement
                                        // So basically if all of the fields have user input this alert will happen instead.
                                        // This says if the if statement is false, do this: 
} else {
            // Added objects for recalling it to blog.html
                                        // This is done so that I can store locally and display on blog.html.
    const newPost = {
        username: username,
        title: title,
        content: content
    };

            // JSON PARSE
                                        // Added JSON parse to take JSON strings and convert them into JS objects.
                                        // This will retrieve any existing posts from localStorage.
                                        // As well as initiliaze an empty array.
    let posts = JSON.parse(localStorage.getItem('blogPosts')) || []; // localstorage geitem retrieves the value stored in LS under the class  
                                        // (key) blogPosts. The getitem blogposts returns null (falsey). So "|| []"" ensures that if localstorage getitem returns null, "posts" is initialized as an empty array. So basically, this will fetch any existing blog posts from localstorage and parse them from JSON to JS objects and init posts as an empty array ( "[]" ) if no posts are found in LS.
            // Add New Post to Array
    posts.push(newPost); // Pushes (adds) the new post to the array "[]".

            // Store updated posts [] array into LS.
    localStorage.setItem('blogPosts', JSON.stringify(posts)); // setItem is saying, hey take blogPosts data, and store them in LS. And JSON. 
                                                              // stringify(posts) is saying to take those blogPosts values and turn them back into JSON strings so that we can use them in posts.
                                                              // Basically, this is done so posts array data is saved into the LS. And JSON.stringify converts the array of posts into a format that can be stored as text again.

    alert(`Hello ${username}, your blog has been successfully added!`); // Edited this to add a template literal to be more fancy.

    // REDIRECT to BLOG.HTML
    window.location.href = './blog.html'; // After submit was clicked, user is redirected to blog.html.
        }
    });
});