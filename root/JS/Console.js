//console
var direction = 1;
var i = 0;
var textarea = $(".term");
var text = "ping life";
var choiceIndex = Math.floor(Math.random() * text.length);

// NOTE:
// I added the "@dev:~$ " as css:before elem, easier to write the code

function count() {
  i += direction;
  direction *= i % text.length == 0 ? -1 : 1;
  textarea.text(text.substr(0, i));
  clearInterval(time);

  // direction is 1 if counting up
  if (direction === 1) {
    if (i === 0) {
      // buffer for start
      time = setInterval(count, 1000);
    } else {
      time = setInterval(count, Math.floor(Math.random() * 1000) + 50);
    }
  } else {
    // direction is -1 if counting down
    if (i === text.length) {
      time = setInterval(count, 1500);
    } else {
      // buffer for end
      time = setInterval(count, 100);
    }
  }
}

// inital interval
// setTimeout doesn't work well here
var time = setInterval(count, 1000);
