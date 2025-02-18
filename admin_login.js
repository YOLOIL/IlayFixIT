// פונקציה לאימות נתונים
function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // בדיקה בסיסית
    if (username === "admin" && password === "password123") {
        alert("ברוך הבא, מנהל!");
        return true; // ממשיך לשלוח את הטופס
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block"; // מציג הודעת שגיאה
        return false; // מונע שליחה
    }
}
