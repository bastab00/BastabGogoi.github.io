const MAX_STUDENTS = 100;

class Student {
    constructor(rollNo, firstName, lastName, course) {
        this.rollNo = rollNo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.course = course;
    }
}

let students = [];
let studentCount = 0;

// Prompt for adding a student
function addStudent() {
    let inputContainer = document.getElementById('input-container');
    inputContainer.innerHTML = `
        <input type="number" id="rollNo" placeholder="Roll Number" required>
        <input type="text" id="firstName" placeholder="First Name" required>
        <input type="text" id="lastName" placeholder="Last Name" required>
        <input type="text" id="course" placeholder="Course" required>
        <button onclick="saveStudent()">Save Student</button>
    `;
    document.getElementById('student-details').style.display = 'block';
}

// Save the student to the array
function saveStudent() {
    const rollNo = document.getElementById('rollNo').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const course = document.getElementById('course').value;

    if (studentCount >= MAX_STUDENTS) {
        alert('Cannot add more students.');
        return;
    }

    students.push(new Student(rollNo, firstName, lastName, course));
    studentCount++;
    alert('Student added successfully!');
    resetUI();
}

// Find a student by roll number
function findStudentByRollNo() {
    let rollNo = prompt("Enter Roll Number:");
    const student = students.find(s => s.rollNo == rollNo);
    if (student) {
        alert(`Student Found: ${student.rollNo} ${student.firstName} ${student.lastName} ${student.course}`);
    } else {
        alert("Student not found.");
    }
}

// Prompt for searching a student by name
function findStudentByNamePrompt() {
    const name = prompt("Enter Name to Search:");
    findStudentByName(name);
}

// Find a student by name
function findStudentByName(name) {
    let found = false;
    students.forEach(student => {
        if (student.firstName.toLowerCase() === name.toLowerCase() || student.lastName.toLowerCase() === name.toLowerCase()) {
            alert(`Student Found: ${student.rollNo} ${student.firstName} ${student.lastName} ${student.course}`);
            found = true;
        }
    });
    if (!found) {
        alert("No student found with that name.");
    }
}

// Update student details
function updateStudent() {
    const rollNo = prompt("Enter Roll Number of student to update:");
    const student = students.find(s => s.rollNo == rollNo);
    if (student) {
        student.firstName = prompt("Enter new First Name:", student.firstName);
        student.lastName = prompt("Enter new Last Name:", student.lastName);
        student.course = prompt("Enter new Course:", student.course);
        alert("Student updated.");
    } else {
        alert("Student not found.");
    }
}

// Count the total number of students
function countStudents() {
    alert(`Total number of students: ${studentCount}`);
}

// Delete a student
function deleteStudent() {
    const rollNo = prompt("Enter Roll Number of student to delete:");
    const index = students.findIndex(s => s.rollNo == rollNo);
    if (index !== -1) {
        students.splice(index, 1);
        studentCount--;
        alert("Student deleted.");
    } else {
        alert("Student not found.");
    }
}

// Exit the program
function exitProgram() {
    alert("Exiting the program.");
    window.close(); // Close the window (works on some browsers)
}

// Reset UI
function resetUI() {
    document.getElementById('student-details').style.display = 'none';
    document.getElementById('input-container').innerHTML = '';
}

// Function to handle viewing project details
function viewProjectDetails(projectId) {
    if (projectId === 1) {
        window.location.href = "project1.html";  // Navigate to project1.html
    } else if (projectId === 2) {
        window.location.href = "project2.html";  // Navigate to project2.html
    } else if (projectId === 3) {
        window.location.href = "project3.html";  // Navigate to project3.html
    } else if (projectId === 4) {
        window.location.href = "project4.html";  // Navigate to project4.html
    }
}
