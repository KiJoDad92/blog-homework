const formElement = document.querySelector('form');

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form input values
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Check if all fields are filled
    if (username && title && content) {
        // Create a new post object
        const newPost = {
            username: username,
            title: title,
            content: content
        };

        // Get existing blog posts from local storage or initialize an empty array
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        
        // Add the new post to the array
        blogPosts.push(newPost);

        // Store the updated blog posts back to local storage
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        // Redirect to the blog page after successful submission
        window.location.href = 'blog.html';
    } else {
        // Display an alert if the form is incomplete
        alert('Please complete the form.');
    }
}

// Add event listener to the form for form submission handling
formElement.addEventListener('submit', handleFormSubmission);


// // TODO: Create a variable that selects the form element
// const formElement = document.querySelector('form');
// // TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
// function handleFormSubmission(event) {
//   event.preventDefault(); // Prevent the default form submission behavior

//   const username = document.getElementById('username').value;
//   const title = document.getElementById('title').value;
//   const content = document.getElementById('content').value;

//   if (username && title && content) {
//       const newPost = {
//           username: username,
//           title: title,
//           content: content
//       };

//       // Get existing blog posts from local storage or initialize an empty array
//       const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
//       blogPosts.push(newPost);

//       // Store the updated blog posts back to local storage
//       localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

//       // Redirect to the blog page
//      if  (username && title && content) {
//         const newPost = {
//             username: username,
//             title: title,
//             content: content
//         };
//       window.location.href = 'index.html';
//   } else {
//       alert('Please complete the form.');
//   }
// }

// // Add event listener to the form for form submission handling
// formElement.addEventListener('submit', handleFormSubmission);