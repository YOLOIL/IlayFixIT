// פונקציה שמציגה את הטופס המתאים לפי הבחירה (תקלה IT או הצעת מחיר)
function showForm() {
    const issueForm = document.getElementById("issueForm");
    const quoteForm = document.getElementById("quoteForm");

    // בדיקת האפשרות שנבחרה
    const selectedOption = document.querySelector('input[name="requestType"]:checked');
    if (!selectedOption) return;

    if (selectedOption.value === "issue") {
        issueForm.style.display = "block";
        quoteForm.style.display = "none";
    } else if (selectedOption.value === "quote") {
        issueForm.style.display = "none";
        quoteForm.style.display = "block";
    }
}

// פונקציה להצגת שדה מותאם אישית לתקלות מסוג "אחר"
function toggleCustomIssue(show) {
    const customIssue = document.getElementById("customIssue");
    if (customIssue) {
        customIssue.style.display = show ? "block" : "none";
    }
}

// מאזינים לבחירת סוג הבקשה ולבחירת סוג התקלה
document.addEventListener("DOMContentLoaded", function() {
    // מאזין לשינוי בבחירת סוג הבקשה
    const requestOptions = document.querySelectorAll('input[name="requestType"]');
    requestOptions.forEach(option => {
        option.addEventListener("change", showForm);
    });

    // מאזין לבחירת סוג התקלה בתוך טופס התקלה
    const issueOptions = document.querySelectorAll('input[name="issueType"]');
    issueOptions.forEach(option => {
        option.addEventListener("change", function() {
            toggleCustomIssue(this.value === "other");
        });
    });
});
