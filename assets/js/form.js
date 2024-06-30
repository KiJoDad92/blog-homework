const formElement = document.querySelector('form');

function handleFormSubmission(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (username && title && content) {
        const newPost = {
            username: username,
            title: title,
            content: content
        };
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(newPost);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        window.location.href = 'blog.html'; 
    
    } else {
        alert('Please complete the form.');
    }
}

formElement.addEventListener('submit', handleFormSubmission);