
//basic button that change its color when clicked using javascript
const button = document.getElementById("myButton");


button.onclick = function() {
  this.style.backgroundColor = "green";
}

// alert box that displays a greeting message based on current time using javascript

function getGreeting() {
    const date = new Date();
    const hour = date.getHours();
  
    if (hour < 12) {
      return "Good Morning!";
    } else if (hour < 17) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  }
  
  alert(getGreeting());

  //basic calculator

  