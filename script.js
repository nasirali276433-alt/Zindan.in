
 function showMessage(event){
    event.preventDefault();

    document.getElementById("message").innerHTML =
    "Thank you! Your message has been sent successfully.";

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
    "Request Submitted Successfully!";

    setTimeout(() => {
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("successMsg").innerHTML = "";
    }, 2000);

    <div class="container">
    <form class="login-form">
        <h2>Login</h2>

        <div class="input-box">
            <input type="email" placeholder="Email Address" required>
        </div>

        <div class="input-box">
            <input type="password" placeholder="Password" required>
        </div>

        <button type="submit">Login</button>

        <p class="register">
            Don't have an account?
            <a href="#">Register</a>
        </p>
    </form>
</div>

}
