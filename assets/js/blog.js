//target blog container
const blogContainer = document.getElementById("blog-container");
const titleHtml = document.getElementById("blog-title");
const contentHtml = document.getElementById("blog-content");
const authorHtml = document.getElementById("author");

function getBlog() {
  //Get blog items from localStorage
  // Display data from local storage
  const blogPosts = JSON.parse(localStorage.getItem("blog")) || [];

  // iterating over array
  for (let i = 0; i < blogPosts.length; i++) {
    const container = document.createElement("div");
    container.classList.add("blog");

    const titleElement = document.createElement("p");
    titleElement.classList.add("blog-title");
    titleElement.innerText = `Title: ${blogPosts[i].BlogTitle}`;

    const contentElement = document.createElement("p");
    contentElement.classList.add("blog-content");
    contentElement.innerText = blogPosts[i].BlogContent;
    
    const nameElement = document.createElement("p");
    nameElement.innerText = `Author: ${blogPosts[i].Name}`;

    container.appendChild(titleElement);
    container.appendChild(contentElement);
    container.appendChild(nameElement);

    blogContainer.appendChild(container);
  }
}

getBlog();

// dark/light mode switch functions
// Access toggle switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

// Set default mode to dark
let mode = "light";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});

// back button function
const backButton = document.getElementById("backButton");

backButton.addEventListener("click", () => {
  window.location.replace("./index.html");
});
