window.onload = function() {
    let car = document.getElementById("car");
    let headline = document.getElementById("headline");
    let description = document.getElementById("description");
    let details = document.getElementById("details");
    let button = document.getElementById("startButton");
    
    // Start moving the car emoji from left to right
    car.style.transform = "translateX(100vw) scaleX(-1)";
    
    // After 2 seconds, show the other elements and update the title
    setTimeout(() => {
        car.style.display = "none";  // Hide the car emoji after the animation
        headline.style.display = "block";  // Show the headline
        description.style.display = "block";  // Show description
        details.style.display = "block";  // Show details
        button.style.display = "block";  // Show button
        document.title = "🏎️ IT'S LIGHTS OUT AND AWAY WE GO!! 🏎️";
    }, 2000);  // Wait 2 seconds for the animation to complete
};

function nextPage() {
    window.location.href = 'page2.html'; // Redirect to second page when button is clicked
}
