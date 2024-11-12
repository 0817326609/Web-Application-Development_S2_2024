function validateLogin() {
    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    if (!role) {
        loginMessage.textContent = "Please select a role.";
        loginMessage.style.color = "red";
        return;
    }

    if (role === "student") {
        if (username === "A" && password === "B") {
            loginMessage.textContent = "Student login successful!";
            loginMessage.style.color = "green";
            // Redirect to student dashboard or subjects page
        } else {
            loginMessage.textContent = "Wrong credentials for student. Try again or sign up.";
            loginMessage.style.color = "red";
        }
    } else if (role === "teacher") {
        // Sample teacher login (adjust credentials as needed)
        if (username === "TeacherUsername" && password === "TeacherPassword") {
            loginMessage.textContent = "Teacher login successful!";
            loginMessage.style.color = "green";
            // Redirect to teacher dashboard
        } else {
            loginMessage.textContent = "Wrong credentials for teacher. Try again or sign up.";
            loginMessage.style.color = "red";
        }
    }
}
