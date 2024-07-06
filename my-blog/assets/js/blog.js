// The FLOW
// Statically display blog inputs.
// Hold data via localstorage.

document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blogList');

    // Retrieve Blog Posts
    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Template Literal
    const renderBlogPost = (post) => `
    <div class="blog-post">
    <h2>${post.title}</h2>
    <p><strong>By ${post.username}</strong></p>
    <p>${post.content}</p>
    </div>
    `

    // Render each posted Blog
    posts.forEach(post => {
        blogList.innerHTML += renderBlogPost(post);
    });
});