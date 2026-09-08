# Dynamic Image Filtering System

A responsive and interactive image gallery built using **HTML, CSS, Bootstrap, and JavaScript**. The project dynamically filters and displays images based on the category selected from the navigation bar using **JavaScript DOM manipulation and data attributes**.

**Features

* Dynamic image filtering based on selected categories
* Category-based navigation
* Show all images using the **All** filter
* Responsive layout across desktop, tablet, and mobile devices
* Interactive navigation with active-state styling
* Smooth hover effects and image transitions
* Responsive image cards using Bootstrap Grid
* Clean and user-friendly interface

**Technologies Used

* HTML5
* CSS3
* JavaScript
* Bootstrap 5

 Core JavaScript Concept

The main functionality retrieves the selected category from the navigation button and compares it with the `data-category` attribute of each project image.


const category = button.getAttribute("data-category");

if (
    category === "all" ||
    image.getAttribute("data-category") === category
) {
    image.style.display = "block";
} else {
    image.style.display = "none";
}

JavaScript Concepts Demonstrated

* DOM Selection
* Event Handling
* Data Attributes
* Conditional Logic
* Dynamic Element Visibility
* forEach() Loop
* getAttribute()
* Event Listeners

 Project Structure


Dynamic-Image-Filtering-System/
│
├── index.html
├── script.js
├── Styles.css
│
└── Images/
    ├── Engine Repair
    ├── Plumbing
    ├── Electrical
    └── Repair House

**Project Preview

The application provides category-based navigation that allows users to filter the project images dynamically without reloading the page.

**Live Demo

**Live Application:**
https://your-live-project-link.com




