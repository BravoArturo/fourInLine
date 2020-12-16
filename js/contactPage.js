console.log("Hola");

var cancelButton = function() {
    location.href = "index.html"
}
var sendForm = function() {
    
    if (nameI.value === null || nameI.value === "" || nameI.value.length<3) {
        nameError.style.display = "block";   
    }else {
        nameError.style.display = "none";
    }
      
    if (lastNameI.value === null || lastNameI.value === "" || lastNameI.value.length<3) {
        lastNameError.style.display = "block";   
    }else {
        lastNameError.style.display = "none";
    }
    
    if (emailI.value === null || emailI.value === "" || (!expresion.test(emailI.value))) {
        emailError.style.display = "block";
    }else {
        emailError.style.display = "none";
    }
    
    if (isNaN(ageI.value) || ageI.value>100 || ageI.value<0 || ageI.value === null || ageI.value === "") {
        ageError.style.display = "block";
    }else {
        ageError.style.display = "none";
    }

    if (man.checked == false && woman.checked == false && other.checked == false) {
        genderError.style.display = "block";
    }else {
        genderError.style.display = "none";
    }

    if (ta.value === null || ta.value === "" || ta.value.length<20) {
        commentError.style.display = "block";    
    }else {
        commentError.style.display = "none";
    }
    
    if (man.checked == true) {
        genderC = "Hombre";
    }else if (woman.checked == true) {
        genderC = "Mujer";
    }else {
        genderC = "Otro";
    }

    if (nameError.style.display == "none" && lastNameError.style.display == "none" && emailError.style.display == "none" && ageError.style.display == "none" && genderError.style.display == "none" &&commentError.style.display == 'none') {
        console.log("The informacion was send");
    }else {
        console.log('Correct the fields and you will get your data');
    }

    return false;
}
var validateEmail = function() {
    expresion = /\w+@+\w+\.+[a-z]/
}


var getElemtns = function() {
     form = document.getElementById("form");
     nameI = document.getElementById("nameI");
     lastNameI = document.getElementById("lastNameI");
     emailI = document.getElementById("emailI");
     ageI = document.getElementById("ageI");
     man = document.getElementById("man");
     woman = document.getElementById("woman");
     ta = document.getElementById("ta");
     nameError = document.getElementById("nameError");
     lastNameError = document.getElementById("lastNameError");
     emailError = document.getElementById("emailError");
     ageError = document.getElementById("ageError");
     genderError = document.getElementById("genderError");
}

var init = function () {
    getElemtns();
    validateEmail();
}

window.onload = init;
