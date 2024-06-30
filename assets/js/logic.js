
// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// TODO: Create functions to read and write from local storage


let mode = 'light'; // Default mode is light


const themeSwitcher = document.getElementById('themeSwitcher');
const container = document.body; 

function toggleTheme() {
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  } else {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  localStorage.setItem('themeMode', mode);
}

const savedMode = localStorage.getItem('themeMode');
if (savedMode) {
  mode = savedMode;
  container.setAttribute('class', mode); 
} else {
  container.setAttribute('class', 'light');
}

themeSwitcher.addEventListener('click', toggleTheme);


