
// TODO: Create a variable that selects the main element

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data

// TODO: Call the function to render the list of blog posts


// TODO: Create a variable that selects the main element
const mainElement = document.querySelector('main');
// TODO: Create a function that builds an element and appends it to the DOM
function appendElementToMain(element) {
    mainElement.appendChild(element);
  }
// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoBlogPosts() {
    const messageElement = document.createElement('p');
    messageElement.textContent = 'No blog posts available.';
    mainElement.appendChild(messageElement);
}
// TODO: Create a function that reads from local storage and returns the data
function getDataFromLocalStorage() {
    const data = localStorage.getItem('blogPosts'); // Assuming 'blogPosts' is the key used for storing data
    return JSON.parse(data) || []; // Parse JSON data and return an empty array if data is not found
  }
// TODO: Call the function to render the list of blog posts
function renderBlogPosts() {
    const blogPosts = getDataFromLocalStorage();
  
    if (blogPosts.length === 0) {
      handleNoBlogPosts();
    } else {
      blogPosts.forEach(blogPost => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
          <h2>${blogPost.title}</h2>
          <p>${blogPost.content}</p>
        `;
        appendElementToMain(postElement);
      });
    }
  }
  
  renderBlogPosts();

