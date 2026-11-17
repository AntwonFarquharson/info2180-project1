/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    //Find the form, the email input, and the message div
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".message");

    //Listen for when the user clicks "Subscribe"
    form.addEventListener("submit", function (event) {
        // Stop the page from refreshing
        event.preventDefault();

        //Get what the user typed and remove extra spaces
        const emailValue = emailInput.value.trim();

        //Check if the input is empty
        if (emailValue === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            // If they typed something, show the thank you message
            messageDiv.textContent = "Thank you! Your email address " + emailValue + " has been added to our mailing list!";
        }
        
        emailInput.value = "";
    });
});