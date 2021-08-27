// Grab dodger
const dodger = document.getElementById('dodger')
// Change color to pink #FF69B
dodger.style.backgroundColor = "#FF69B4";

// Write a function that moves the dodger to left by 1px until the dodger hits the end of its container
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// Add event listner to the entire document. 
// Specify the event type: "keydown" (inside the callback function, further specify it to "ArrowLeft")
// Write an annonymous function that takes an event as argument. In function body, use if statements to test if the event passed in as argument is "ArrowLeft". If it evaluates true, moveDodgerLeft is executed. 
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});

// Write a function that moves the dodger to right by 1px until the dodger hits the end of its container
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
};

// Add event listner to the entire document. 
// Specify the event type: "keydown" (inside the callback function, further specify it to "ArrowRight")
// Write an annonymous function that takes an event as argument. In function body, use if statements to test if the event passed in as argument is "ArrowRight". If it evaluates true, moveDodgerRight is executed. 
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});