
   function showMessage(event){
    event.preventDefault();

    document.getElementById("message").innerHTML =
    "Thank you! Your message has been submitted successfully.";

    document.querySelector(".contact-form").reset();
}

function openForm(){
    document.getElementById("registerForm").style.display = "block";
}

function closeForm(){
    document.getElementById("registerForm").style.display = "none";
}

function registerAccount(event){
    event.preventDefault();

    document.getElementById("successMsg").innerHTML =
    "Account Created Successfully!";

    setTimeout(() => {
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("successMsg").innerHTML = "";
    }, 2000);
}
