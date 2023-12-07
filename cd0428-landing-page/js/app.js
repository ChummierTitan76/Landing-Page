/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// Declaring Html Section Variables 
const bodyElement = document.querySelector("body");
const headerElement = document.querySelector("header");
const mainElement = document.querySelector("main");
const ulElement = document.querySelector("ul");
const htmlElement = document.querySelector("html");

// Declaring Section Variable for targeting
const secOne = document.getElementById('section1');
const secTwo = document.getElementById('section2');
const secThree = document.getElementById('section3');
const secFour = document.getElementById('section4');


// Declaring nav link variables for styling purposes //
const navLinks = document.querySelectorAll("a");

// Setting Scroll Functionality to Smooth //
htmlElement.style.scrollBehavior = "smooth";

// Eliminating the List Style From NavBar 
ulElement.setAttribute('class', 'navbar_menu');

/* Creating the NavBar As Empty Array */
const navBar = [];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav

/////////////////////////////////////////////////////
// START SECTION ONE //
/////////////////////////////////////////////////////

// Creating li element for Section 1
const navLinkOne = document.createElement('li');

// Adding new nav link
document.querySelector('ul').appendChild(navLinkOne);

// Setting the Class of the li element
navLinkOne.setAttribute('class','menu_link');

// Setting the Href of the link 
const linkContentOne = "<a href='#section1'>Section 1</a>";
navLinkOne.innerHTML = linkContentOne;

// Create an anchor ID within Section 1
const anchorOne = document.createElement('a');
anchorOne.setAttribute('href', '#anchorOne'); // Setting the href of the anchor
document.getElementById('section1').appendChild(anchorOne);

// Scroll to anchor ID using scrollTO event
navLinkOne.addEventListener('click', function(){
    this.scrollTo(anchorOnePort);
    navLinkOne.setAttribute('class', 'active');
    navLinkTwo.removeAttribute('class', 'active');
    navLinkThree.removeAttribute('class', 'active');
    navLinkFour.removeAttribute('class', 'active');
    secOne.setAttribute('class','active');
    secTwo.removeAttribute('class','active');
    secThree.removeAttribute('class','active');
    secFour.removeAttribute('class','active');
});

// Detecting the Section Within the Viewport
const anchorOnePort = anchorOne.getBoundingClientRect();


/////////////////////////////////////////////////////
// START SECTION TWO //
/////////////////////////////////////////////////////

// Creating li element for Section 2
const navLinkTwo = document.createElement('li');

// Adding new nav link
document.querySelector('ul').appendChild(navLinkTwo);

// Setting the Class of the li element
navLinkTwo.setAttribute('class','menu_link');

// Setting the Href of the link 
const linkContentTwo = '<a href="#section2">Section 2</a>';
navLinkTwo.innerHTML = linkContentTwo;

// Create an anchor ID within Section 2
const anchorTwo = document.createElement('a');
anchorTwo.setAttribute('href', '#anchorTwo'); // Setting the href of the anchor
document.getElementById('section2').appendChild(anchorTwo);

// Scroll to anchor ID using scrollTO event
navLinkTwo.addEventListener('click', function(){
    this.scrollTo(anchorTwoPort);
    navLinkOne.removeAttribute('class', 'active');
    navLinkThree.removeAttribute('class', 'active');
    navLinkFour.removeAttribute('class', 'active');
    navLinkTwo.setAttribute('class', 'active');
    secOne.removeAttribute('class','active');
    secTwo.setAttribute('class','active');
    secThree.removeAttribute('class','active');
    secFour.removeAttribute('class','active');
});

// Detecting the Section Within the Viewport
const anchorTwoPort = anchorTwo.getBoundingClientRect();

/////////////////////////////////////////////////////
// START SECTION THREE //
/////////////////////////////////////////////////////

// Creating li element for Section 3
const navLinkThree = document.createElement('li');

// Adding new nav link
document.querySelector('ul').appendChild(navLinkThree);

// Setting the Class of the li element
navLinkThree.setAttribute('class','menu_link');

// Setting the Href of the link 
const linkContentThree = '<a href="#section3">Section 3</a>';
navLinkThree.innerHTML = linkContentThree;

// Create an anchor ID within Section 3
const anchorThree = document.createElement('a');
anchorThree.setAttribute('href', '#anchorThree'); // Setting the href of the anchor
document.getElementById('section3').appendChild(anchorThree);

// Scroll to anchor ID using scrollTO event
navLinkThree.addEventListener('click', function(){
    this.scrollTo(anchorThreePort);
    navLinkOne.removeAttribute('class', 'active');
    navLinkTwo.removeAttribute('class', 'active');
    navLinkThree.setAttribute('class', 'active');
    navLinkFour.removeAttribute('class', 'active');
    secOne.removeAttribute('class','active');
    secTwo.removeAttribute('class','active');
    secThree.setAttribute('class','active');
    secFour.removeAttribute('class','active');
});

// Detecting the Section Within the Viewport
const anchorThreePort = anchorThree.getBoundingClientRect();

/////////////////////////////////////////////////////
// START SECTION 4 //
/////////////////////////////////////////////////////

// Creating li element for Section 4
const navLinkFour = document.createElement('li');

// Adding new nav link
document.querySelector('ul').appendChild(navLinkFour);

// Setting the Class of the li element
navLinkFour.setAttribute('class','menu_link');

// Setting the Href of the link 
const linkContentFour = '<a href="#section4">Section 4</a>';
navLinkFour.innerHTML = linkContentFour;

// Create an anchor ID within Section 4
const anchorFour = document.createElement('a');
anchorFour.setAttribute('href', '#anchorFour'); // Setting the href of the anchor
document.getElementById('section4').appendChild(anchorFour);

// Scroll to anchor ID using scrollTO event
navLinkFour.addEventListener('click', function(){
    this.scrollTo(anchorFourPort);
    navLinkOne.removeAttribute('class', 'active');
    navLinkTwo.removeAttribute('class', 'active');
    navLinkThree.removeAttribute('class', 'active');
    navLinkFour.setAttribute('class', 'active');
    secOne.removeAttribute('class','active');
    secTwo.removeAttribute('class','active');
    secThree.removeAttribute('class','active');
    secFour.setAttribute('class','active');
});

// Detecting the Section Within the Viewport
const anchorFourPort = anchorFour.getBoundingClientRect();

/////////////////////////////////////////////////////
// END SECTION FOUR //
/////////////////////////////////////////////////////



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


