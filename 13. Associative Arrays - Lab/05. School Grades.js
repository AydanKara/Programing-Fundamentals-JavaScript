function schoolGrades(arr) {
    let studentInfo = new Map();
    for (let el of arr) {
        let currStudentInfo = el.split(" ");
        let name = currStudentInfo.shift();
        let grades = currStudentInfo.map(Number);
        if (studentInfo.has(name)) {
            let oldGrades = studentInfo.get(name);
            for (let grade of grades) {
                oldGrades.push(grade);
            }
            studentInfo.set(name, oldGrades);
        } else {
            studentInfo.set(name, grades);
        }
    }
    for (let [name, grades] of (studentInfo)) {
        let av = 0;
        for (let grade of grades) {
            av += grade;
        }
        let averageFinal = av / grades.length;
        studentInfo.set(name, averageFinal);
    }
    let sorted = Array.from(studentInfo.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    for (student of sorted) {
        console.log(`${student[0]}: ${student[1].toFixed(2)}`);
    }
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);