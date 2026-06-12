// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('testBtn');
    const resultText = document.getElementById('resultText');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
        resultText.textContent = "🎉 Awesome! Your JavaScript is working perfectly!";
        console.log("Button was clicked successfully!");
    });
});