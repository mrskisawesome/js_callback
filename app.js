//Callbacks are functions that get passed as a parameter to another function.
// when the function is called the user will be notified on the console
function notifyUser() {
  console.log("notifyUser function was called!");
}

// accepts a function as an argument to run when it has done it's work
function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  noyifyUserCallback();
}

// run the awesome function, and pass the notifyUser function to it
//myAwesomeFunction(notifyUser);
//https://youtu.be/cNjIUSDnb9k?si=A3rZIodHFiSLa4eO
//this is like when you take your car to the garage and rather than wait you give them a mechanism to call you back on

//showing order
/*console.log("1"); //first to log
setTimeout(() => {
  console.log("2"); //third to log as waits 100ms - even if you have 0ms will still be third
}, 100);
console.log("3"); //second to log

const names = ["james", "jess", "lily", "sev"];
//synchronous example
//names.forEach((name) => console.log(name));
//set a constant which takes in parameters and passes them to an object?
const myForEach = (arr, cb) => {
  // loops through the array
  for (let i = 0; i < arr.length; i++) {
    //and stores the item in element
    const element = arr[i];
    //then cb parses the element to the parameter on line 30
    cb(element);
  }
};*/
//so now we run the myForEach function with names as one parameter and name as the cb parameter
//myForEach(names, (name) => {
// console.log(name);
//});

//using a callback function with a button
const button = document.querySelector("button");

function toggle() {
  button.classList.toggle("altColor");
}

button.addEventListener("click", toggle);
