/********* create variables *********/
// Useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const submitButton = document.getElementById('submit-button');
const contactForm = document.getElementById('contact-form');

/********* submit form and show thank you message *********/
// When the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const thankYouMessage = document.createElement('p');
    thankYouMessage.innerText = "Thank you for your message";
    thankYouMessage.style.fontSize = "24px";
    document.body.innerHTML = '';  // Clear the current content
    document.body.appendChild(thankYouMessage); // Add the thank you message
});
