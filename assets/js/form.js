// function to commence on click of Submit
function submitBlogPost() {
  console.log("Test Function");
  // grab input information from landing page
  //state variable for content
  const name = document.getElementById("name").value;
  console.log(name);
  // check for valid name input
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }
  //state variable for title
  const blogTitle = document.getElementById("title").value;
  console.log(blogTitle);
  // check for valid blog title input
  if (blogTitle === "") {
    alert("Please enter your blog title.");
    return false;
  }
  // state variable for blog content
  const blogContent = document.getElementById("content").value;
  console.log(blogContent);
  // check for valid blog content
  if (blogContent === "") {
    alert("Please enter blog content.");
    return false;
  }
  // create empty array for blog info (if, else/short circuit operator)
  const userSub = JSON.parse(localStorage.getItem("blog")) || [];

  // create blog object with inputs
  const blog = {
    Name: name,
    BlogTitle: blogTitle,
    BlogContent: blogContent,
  };

  // put in empty array
  userSub.push(blog);

  //store in localStorage. Turn object into string
  // 'key', 'value'
  localStorage.setItem("blog", JSON.stringify(userSub));

  console.log(blog);

  // localStorage.setItem("blog", JSON.stringify(blog));

  // redirects to blog page
  window.location.replace("./blog.html");
}

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
