function getBlog() {
// Get blog items from localStorage
// Display data from local storage
const stringblog = localStorage.getItem("blog")
// turn string back to object to derive values
const blog = JSON.parse(stringblog);

console.log(blog.Name);
console.log(blog.BlogTitle);
console.log(blog.BlogContent);

document.getElementById("name").innerHTML = blog.Name;
document.getElementById("title").innerHTML = blog.BlogTitle;
document.getElementById("content").innerHTML = blog.BlogContent;
}
// run function to display on screen
getBlog();

// dark/light mode switch functions
// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'light';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

// back button function
const backButton = document.getElementById("backButton");

backButton.addEventListener("click", () => {
    window.location.replace("./index.html");
});
