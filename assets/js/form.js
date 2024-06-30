// TODO: Create a variable that selects the form element
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if (!username || !title || !content) {
    errorMessage.textContent = 'Please fill in all fields.';
    return;
  };
  
  errorMessage.textContent = '';

  const formData = {
    username: username,
    title: title,
    content: content
  };

  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem('formData', formDataJSON);
  window.location.href = 'blog.html';
});
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.


const form = document.getElementById('blogForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();


  // Store form data in local storage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Redirect to blog.html
  window.location.href = 'blog.html';
});
