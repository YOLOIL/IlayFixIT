// פונקציה לבדוק את הוולידציה של הטופס
function validateForm() {
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirm-password").value.trim();
    var email = document.getElementById("mail").value.trim();
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();

    var namePattern = /^[א-תa-zA-Z]+$/;
    if (!namePattern.test(fname)) {
        alert("שם פרטי יכול להכיל רק אותיות");
        return false;
    }
    if (!namePattern.test(lname)) {
        alert("שם משפחה יכול להכיל רק אותיות");
        return false;
    }

    if (password.length < 6) {
        alert("הסיסמה צריכה להכיל לפחות 6 תווים");
        return false; 
    }

    if (password !== confirmPassword) {
        alert("הסיסמה ואישור הסיסמה אינם תואמים");
        return false; 
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("הכנס כתובת אימייל תקינה");
        return false;
    }

    if (fname === "" || lname === "" || email === "" || phone_number === "" || password === "" || confirmPassword === "") {
        alert("יש למלא את כל השדות");
        return false;
    }

    return true;
}
