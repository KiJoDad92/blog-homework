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

  const blogPosts = getDataFromLocalStorage('blogPosts');

  if (!blogPosts || blogPosts.length === 0) {
    const messageElement = document.createElement('p');
    messageElement.textContent = 'No Blog posts yet...';
    mainElement.appendChild(messageElement);
  }};
// TODO: Create a function that reads from local storage and returns the data
function getDataFromLocalStorage(key) {
  const data = localStorage.getItem(key);

  return JSON.parse(data);
}
// TODO: Call the function to render the list of blog posts
function renderBlogPosts() {
  const blogPosts = getDataFromLocalStorage('blogPosts');

  const mainElement = document.querySelector('main');

  if (blogPosts && blogPosts.length > 0) {
    blogPosts.forEach(post => {

      const article = document.createElement('article');
      const h2 = document.createElement('h2');
      const blockquote = document.createElement('blockquote');
      const p = document.createElement('p');
      h2.textContent = post.title;
      p.textContent = post.content;
      article.appendChild(h2);
      blockquote.appendChild(p);
      article.appendChild(blockquote);
      mainElement.appendChild(article);
    });
  } else {
    const messageElement = document.createElement('p');
    messageElement.textContent = 'No Blog posts yet...';
    mainElement.appendChild(messageElement);
  };
};

renderBlogPosts();
