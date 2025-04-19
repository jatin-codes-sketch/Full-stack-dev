// clearInterval is a method that stops the execution of a function that was previously set to run at specified intervals using setInterval.
// It takes the interval ID returned by setInterval as an argument and stops the execution of that function.

const intervalId = setInterval(() => {
    console.log("This function is being executed at 1-second intervals");
}, 1000); // Executes every 1 second

setTimeout(function() {
    clearInterval(intervalId); // Stops the repeating interval
    console.log("Interval stopped after 5 seconds");
}, 5000); // Stops it after 5 seconds
