
function submitForm() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = "";

    
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    if (name == "") {
        error += "Please enter your name.\n";
    }

    if (email == "") {
        error += "Please enter your email address.\n";
    } else if (!validateEmail(email)) {
        error += "Please enter a valid email address.\n";
    }

    if (message == "") {
        error += "Please enter a message.\n";
    }

    if (error != "") {
        alert(error);
        return false;
    }
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

       setTimeout(function () {
        
        var responseDiv = document.getElementById("response");
        responseDiv.innerHTML = "Form submitted successfully!";
        responseDiv.style.backgroundColor = "white";
        responseDiv.style.color = "black";
        responseDiv.style.padding = "10px";
        responseDiv.style.borderRadius = "5px";
    }, 1000);
}