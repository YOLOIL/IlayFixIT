// ודא שדף ה-HTML נטען לפני הפעלת הסקריפט
document.addEventListener("DOMContentLoaded", () => {
    // מציאת אלמנט שדה מספר הטלפון
    const phoneInput = document.getElementById("phone");

    // הוספת מאזין אירועים לשינויי תוכן בשדה הטלפון
    phoneInput.addEventListener("input", () => {
        // תבנית שמאפשרת רק ספרות (עד 10 ספרות)
        const phonePattern = /^[0-9]{0,10}$/;

        // בדיקת התאמה לתבנית
        if (!phonePattern.test(phoneInput.value)) {
            // הגדרת הודעת שגיאה מותאמת
            phoneInput.setCustomValidity("אנא הזן רק ספרות (עד 10 ספרות)");
        } else {
            // הסרת הודעת השגיאה אם הערך תקין
            phoneInput.setCustomValidity("");
        }
    });
});
