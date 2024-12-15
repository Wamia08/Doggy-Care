/********* create variables *********/
// These are the variables we'll use in our calculations and interactions on the page
let dailyRate = 35; // Default to full day rate ($35)
let selectedDays = 0; // To track the number of days selected
const daysOfWeek = document.querySelectorAll('.day'); // Select all the day buttons (each day button in the list)
const clearButton = document.getElementById('clear-button'); // The clear button to reset all selections
const fullDayButton = document.getElementById('full'); // The full day button
const halfDayButton = document.getElementById('half'); // The half day button
const calculateCostElement = document.getElementById('calculated-cost'); // Element to display the total cost

/********* colour change days of week *********/
// When a day button is clicked, it will toggle between selected and unselected state
daysOfWeek.forEach((day) => {
    day.addEventListener('click', function() {
        // If the day isn't already selected (doesn't have the 'clicked' class)
        if (!day.classList.contains('clicked')) {
            day.classList.add('clicked'); // Add the 'clicked' class
            selectedDays++; // Increase the selected days counter
        } else { // If it's clicked again (it's already selected)
            day.classList.remove('clicked'); // Remove the 'clicked' class
            selectedDays--; // Decrease the selected days counter
        }
        // Recalculate the total cost after each day click or unclick
        calculateTotalCost();
    });
});

/********* clear days *********/
// When the clear button is clicked, all the selections will be removed
clearButton.addEventListener('click', function() {
    daysOfWeek.forEach((day) => {
        day.classList.remove('clicked'); // Remove the 'clicked' class from each day button
    });
    selectedDays = 0; // Reset the selected days counter
    calculateTotalCost(); // Recalculate the total cost (which will be 0)
});

/********* change rate *********/
// When the half-day button is clicked, the daily rate changes to $20 and the class is updated
halfDayButton.addEventListener('click', function() {
    dailyRate = 20; // Set the rate to $20 for half days
    fullDayButton.classList.remove('clicked'); // Remove the 'clicked' class from the full day button
    halfDayButton.classList.add('clicked'); // Add the 'clicked' class to the half day button
    calculateTotalCost(); // Recalculate the total cost with the new rate
});

// When the full-day button is clicked, the daily rate is set back to $35
fullDayButton.addEventListener('click', function() {
    dailyRate = 35; // Set the rate back to $35 for full days
    halfDayButton.classList.remove('clicked'); // Remove the 'clicked' class from the half day button
    fullDayButton.classList.add('clicked'); // Add the 'clicked' class to the full day button
    calculateTotalCost(); // Recalculate the total cost with the new rate
});

/********* calculate *********/
// This function calculates the total cost based on the number of selected days and the daily rate
function calculateTotalCost() {
    let totalCost = selectedDays * dailyRate; // Multiply the selected days by the current daily rate
    calculateCostElement.innerHTML = `${totalCost}`; // Display the total cost in the HTML element
}
