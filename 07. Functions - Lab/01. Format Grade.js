function formatGrade(grade) {
    let gradeText = "";
    if (grade < 3) {
        gradeText = "Fail";
    } else if (grade < 3.50) {
        gradeText = "Poor";
    } else if (grade < 4.50) {
        gradeText = "Good";
    } else if (grade < 5.50) {
        gradeText = "Very good";
    } else if (grade <= 6.00) {
        gradeText = "Excellent";
    }

    let gradeDescription = grade < 3 ? "2" : grade.toFixed(2);
    console.log(`${gradeText} (${gradeDescription})`);
}

formatGrade(3.33)