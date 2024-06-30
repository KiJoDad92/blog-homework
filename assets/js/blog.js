
// TODO: Create a variable that selects the main element
const mainElement = document.querySelector('main');
// TODO: Create a function that builds an element and appends it to the DOM
function buildAndAppendElement(tagName, textContent, parentSelector) {
  const element = document.createElement(tagName);
  element.textContent = textContent;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(element);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoBlogPosts() {
  const mainElement = document.querySelector('main');
  
  // Check if there are any existing blog posts
  if (localStorage.getItem('blogPosts') === null) {
      const messageElement = document.createElement('p');
      messageElement.textContent = 'No Blog posts yet...';
      mainElement.appendChild(messageElement);
  }
}

// Call the function to handle the case of no blog posts
handleNoBlogPosts();

// TODO: Create a function that reads from local storage and returns the data
function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Example of using the function to retrieve blog posts
const blogPosts = getDataFromLocalStorage('blogPosts');
console.log(blogPosts);

// TODO: Call the function to render the list of blog posts
function renderBlogPosts() {
  const blogPosts = getDataFromLocalStorage('blogPosts');

  if (blogPosts) {
      blogPosts.forEach(post => {
          // Render each blog post to the DOM
          // You can implement the rendering logic here
      });
  } else {
      handleNoBlogPosts();
  }
}

renderBlogPosts();


