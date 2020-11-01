// Required variables
var minutes = 25;
var seconds = "00";

// Audio files
var click_sound = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

// Starting template for the timer
function template() {
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

function start_timer() {
  click_sound.play();

  // Change the minutes and seconds to starting time
  minutes = 24;
  seconds = 59;

  // Add the seconds and minutes to the page
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  // Functions
  // Function for minute counter
  function minutesTimer() {
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes;
  }

  // Function for second counter
  function secondsTimer() {
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds;

    // Check if the seconds and minutes counter has reached 0
    // If reached 0 then end the session
    if (seconds <= 0) {
      if (minutes <= 0) {
        // Clears the interval i.e. stops the counter
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Add the message to the html
        document.getElementById("done").innerHTML =
          "Session Completed!! Take a Break";

        // Make the html message div visible
        document.getElementById("done").classList.add("show_message");

        // PLay the bell sound to tell the end of session
        bell.play();
      }

      // Reset the session seconds to 60
      seconds = 60;
    }
  }
}
