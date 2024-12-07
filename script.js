function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to start the counter animation
function startCounterAnimation() {
  var counters = [
    { id: 'counter1', target: 32 },
    { id: 'counter2', target: 75 },
    { id: 'counter3', target: 117 }
  ];

  counters.forEach(function (counterObj) {
    var counterElement = document.getElementById(counterObj.id);
    var currentNumber = 0;
    var interval = setInterval(function () {
      counterElement.textContent = currentNumber;
      currentNumber++;
      if (currentNumber > counterObj.target) {
        clearInterval(interval);
        if (counterObj.id === 'counter3') {
          counterElement.textContent += 'K';
        }
      }
    }, 30);
  });
}

// Check if the counter container is in the viewport and start the animation
window.addEventListener('scroll', function () {
  var counterContainer = document.getElementById('counter-container');
  if (isInViewport(counterContainer)) {
    startCounterAnimation();
    // Remove the event listener to prevent multiple animations
    window.removeEventListener('scroll', arguments.callee);
  }
});