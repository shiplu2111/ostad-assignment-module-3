// The objective of this assignment is to assess your understanding and proficiency in various advanced JavaScript concepts, HTML DOM manipulation, and AJAX requests. You will be required to implement several functionalities and solve  problems using the provided concepts.

// The following are the tasks to be completed in this assignment:

//-------------------------------01-------------------------------//

// Question 1:Date Object:
// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.
// Answer:
Objective: function getDayOfWeek(dateString) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date(dateString);
  let day = days[d.getDay()];
  return day;
}
// b. Implement the function to display the day of the week for the current date.
// Answer:
const inputDate = "2023-06-18";
const dayOfWeek = getDayOfWeek(inputDate);
console.log(dayOfWeek);
//-------------------------------02-------------------------------//
// Question 2:Math Object:

// a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.
// Answer:
function squareRootOfSumOfSquares(arr) {
  var sumOfSquares = 0;

  for (var i = 0; i < arr.length; i++) {
    sumOfSquares += Math.pow(arr[i], 2);
  }

  let squareRoot = Math.sqrt(sumOfSquares);
  return squareRoot;
}
//   b. Implement the function to display the square root of the sum of squares for an array of numbers.
// Answer:

let arr = [1, 2, 3, 4, 5];
console.log(squareRootOfSumOfSquares(arr));

//-------------------------------03-------------------------------//

// Question 3:Numbers:

// a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
// Answer:
function isPrime(num) {
  if (num <= 1) {
    return console.log("Please Insert a Positive number");
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// b. Implement the function to check if a given positive integer is a prime number.
// Answer:

let num = 8;
console.log(isPrime(num));

//-------------------------------04-------------------------------//

// Question 4:Window Object:

// a. Create a function that opens a new window with a specified URL and dimensions (width and height).
// Answer:
function openWindow(url, width, height) {
  const windowSize = "width=" + width + ",height=" + height;
  window.open(url, "_blank", windowSize);
}

//   b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
// Answer:
// let url = "https://www.example.com";
// let width = 800;
// let height = 600;
// openWindow(url, width, height);

//-------------------------------05-------------------------------//

// Question 5:Navigator Object:
//a. Write a JavaScript function that detects the user's browser name and version using the navigator object.
// Answer:
function detectBrowser() {
  let appName = navigator.appName;
  let appVersion = navigator.appVersion;
  return `App name is ${appName} Version is ${appVersion}`;
}

console.log(detectBrowser());

//-------------------------------06-------------------------------//
//Question 6:Geolocation :
//a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.
// Answer:
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('Geolocation is not supported by this browser.') ;
  }
}

function showPosition(position) {
  console.log(`Latitude: ${position.coords.latitude}  Longitude: ${position.coords.longitude}`);
}

getLocation();

//-------------------------------07-------------------------------//
//Question 7:JS Common Events:
// a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.

function coordinatesClick(event) {
  var x = event.clientX;
  var y = event.clientY;
  console.log(`Clicked coordinates: (${x}, ${y})`);
}

document.addEventListener("click", coordinatesClick);

//b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.
//Answer:
function keyDown(event) {
  var keyCode = event.keyCode;
  console.log("Key code: " + keyCode);
}

document.addEventListener("keydown", keyDown);

//c. When the user moves the mouse over an image, change the image source to another image of your choice.
//Answer:

function _mouseOver() {
  var image = document.getElementById("myImage");
  image.src = "images/2.jpg";
}
function _mouseOut() {
  var image = document.getElementById("myImage");
  image.src = "images/1.jpg";
}

//-------------------------------08-------------------------------//
//Question 8.HTML DOM Document:
//

function buttonClick() {
  document.getElementById("myParagraph").innerHTML = "Button Clicked!";
}

//-------------------------------09-------------------------------//
//Question 9.JS DOM Working with Form Input:

function formSubmit(event) {
  event.preventDefault();
  clearErrors();
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  var confirmPasswordInput = document.getElementById('confirmPassword');

  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var passwordError = document.getElementById('passwordError');
  var confirmPasswordError = document.getElementById('confirmPasswordError');

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    return;
  }

  if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
    nameError.textContent = 'Name should contain only letters';
    return;
  }

  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'Invalid email address';
    return;
  }

  if (passwordInput.value.trim() === '') {
    passwordError.textContent = 'Password is required';
    return;
  }

  if (!isValidPassword(passwordInput.value)) {
    passwordError.textContent = 'Invalid password';
    return;
  }

  if (confirmPasswordInput.value.trim() === '') {
    confirmPasswordError.textContent = 'Confirm Password is required';
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
    return;
  }

  alert('Form submitted successfully!');
  document.getElementById("myForm").reset();
}

function clearErrors() {
  var errors = document.getElementsByClassName('error');
  for (var i = 0; i < errors.length; i++) {
    errors[i].textContent = '';
  }
}



function isValidEmail(email) {
  var emailPattern = /^\S+@\S+\.\S+$/;
  return emailPattern.test(email);
}

function isValidPassword(password) {
  var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordPattern.test(password);
}

//-------------------------------10-------------------------------//
//Question 10.DOM Manipulate CSS Class:
//a. Create a webpage with a button and a paragraph element.
//b. Implement a JavaScript function that adds a CSS class named "highlight" to the paragraph element when the button is clicked. The "highlight" class should change the background color of the paragraph to yellow.
function highlightParagraph() {
  let paragraph = document.getElementById("paragraphElement");
  paragraph.classList.add("highlight");
}


//-------------------------------11-------------------------------//
//Question 11.Create Element & Append Element:
//b. Implement a JavaScript function that dynamically creates five list items (<li>) with sequential numbers (1 to 5) and appends them to the unordered list.

    function createListItems() {
      var ul = document.getElementById("myList");

      for (var i = 1; i <= 5; i++) {
        var li = document.createElement("li");
        li.textContent = i;
        ul.appendChild(li);
      }
    }


    //-------------------------------12-------------------------------//
//Question 12.DOM Change Attribute Value:
//a. Create a webpage with an image element (<img>) that has an initial source URL.


// b. Implement a JavaScript function that changes the source URL of the image element when a button is clicked. Use a different image URL of your choice.

function changeImageSource() {
  var imageID = document.getElementById("myImageId");
  imageID.src = "images/2.jpg";
  imageID.alt = "New Image";
}

//-------------------------------13-------------------------------//
//Question 13.DOM Query Selector:
//a. Create a webpage with multiple paragraphs containing different classes and IDs.
//b. Implement a JavaScript function that selects all paragraphs with a specific class and changes their text color to red.

function changeTextColor() {
  var paragraphs = document.querySelectorAll(".myClass");

  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
  }
}

//-------------------------------14-------------------------------//
//Question 14.AJAX Get Request:
//a. Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data".


async function getList() {
  let URL="https://api.example.com/data"
  let res=await axios.get(URL);
  if(res.status===200){
    console.log("Request send successfully");
  }
  else{
      console.log("Request send unsuccessfully");
  }
}

getList();

//-------------------------------15-------------------------------//
//15.AJAX Post Request:


// a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit".


// b. Send a JSON payload with the following data: { "name": "John Doe", "email": "johndoe@example.com" }.

function sendPostRequest() {
  let url = "https://api.example.com/submit";
  let payload = {
    name: "John Doe",
    email: "johndoe@example.com"
  };

  let postRequestResult = axios.post(url, payload)
  if(postRequestResult.status===200){
      console.log("Request send successfully");
    }
    else {
      console.error("Request failed");
    };
}

// Call the function to send the POST request
sendPostRequest();
