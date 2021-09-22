/* Exercise 40

Create a website with a picture, a div, a paragraph and an input field. 
Create a “click EventListener” on the body element of the site. Use the event objects taget method to 
detect which element you are clicking on.
 */
console.log("%cExercise 40", "color: black; background: pink")

document.body.addEventListener("click", (e) => {
    console.log(e.target);
})

/* Exercise 41

Create a form with three different input fields and a submit button. 
Two of the input fields should have the attribute id attached. The third input field
should only have a name attribute attached. 

1: Use the event object to prevent the form from reloading the page. 
2: Get the values and console.log the out via the form element.
 */
console.log("%cExercise 41", "color: black; background: pink")

const form = document.querySelector("#myForm");
const formBtn = document.querySelector("#submit");
const formInputs = form.querySelectorAll("input");

// 1
formBtn.addEventListener("click", e => {
    e.preventDefault();
})
// 2
formInputs.forEach(input => {
    input.addEventListener("input", e => {
        if (input.id == "name" && input.value.length > 4) {
            console.log(`Name: ${e.target.value}`);
            input.classList.add("colorValid");
        } else if (input.id == "height") {
            console.log(`Height: ${e.target.value}cm`);
        } else {
            console.log(`Weight: ${e.target.value}kg`);
        } 
    })
})

/* Exercise 42

Design a login for your note application with email and password as the login parameters. (It doesn’t have to work with firebase). 
Validate the email and the password. 
Use a key event to give the user feedback. The feedback should be as follows: 

strength of password (declined, weak, medium, strong, very strong) 
feedback when the email is correct or not. 
feedback when submit pressed and the fields are validated correctly (e.g. success!! an email has been sent for validation)

Validate the password with a regular expression of your own choice. 

Validate the email address with this regular expression: 

/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
 */
console.log("%cExercise 42", "color: black; background: pink")

const logIn = document.querySelector("#logIn");
const logInBtn = document.querySelector("#login");
const logInInputs = logIn.querySelectorAll("input");

logInInputs.forEach(input => {
    logInBtn.addEventListener("click", e => {
        e.preventDefault();

        if (input.id == "email" && input.value.includes("@")) {
            input.classList.add("colorValid");
            logIn.querySelector(".firstParagraph").innerText = "Valid email address";
        } else if (input.id == "email" && !input.value.includes("@")) {
            input.classList.add("colorInvalid");
            logIn.querySelector(".firstParagraph").innerText = "Please provide a valid email address";

        } else if (input.id == "password" && input.value.length < 5) {
            input.classList.add("colorInvalid");
            logIn.querySelector(".secondParagraph").innerText = "Strength of password: Very weak. Try again";
        } else if (input.id == "password" && input.value.length > 15) {
            input.classList.add("colorValid");
            logIn.querySelector(".secondParagraph").innerText = "Strength of password: Very strong";
        }

        /* switch(input.id == "email") {
            case (input.value.includes("@")):
                input.classList.add("colorValid");
                logIn.querySelector(".firstParagraph").innerText = "Valid email address";
                break;
            case (!input.value.includes("@")):
                input.classList.add("colorInvalid");
                logIn.querySelector(".firstParagraph").innerText = "Please provide a valid email address";
                break;
        }

        switch(input.id == "password") {
            case (input.value.length < 5):
                input.classList.add("colorInvalid");
                logIn.querySelector(".secondParagraph").innerText = "Strength of password: Very weak. Try again";
                break;
            case (input.value.length > 5):
                input.classList.add("colorValid");
                logIn.querySelector(".secondParagraph").innerText = "Strength of password: Very strong";
                break;
        } */
    })
})