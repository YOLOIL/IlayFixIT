// פונקציה לבדיקה שהשדות אינם ריקים
function validateSigninForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "") {
        alert("יש להזין שם משתמש.");
        return false;
    }

    if (password.trim() === "") {
        alert("יש להזין סיסמה.");
        return false;
    }

    // אם הכול תקין
    return true;
}
