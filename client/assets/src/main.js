const studentsEL = document.getElementById("students");
const btnStudents = document.getElementById("term-btn")


// Load students from API (data)

const getStudents = async () => {
    const studentsResponse = await fetch('api/students')
    const studentsData = await studentsResponse.json()
    return studentsData;
}


const displayStudents = (students) => {
    students.forEach(student => {
        //Output
        studentsEL.innerHTML += `
    <div class="card p-5">
        <div class="card-body p-5">
        Name: ${student.name}
        <p class="card-header card-title link">
        ${student.description}
        </p>
        </div>
    </div>
    `
    });
}

const clearStudentDisplay = () => {
    studentsEL.innerHTML = ''
}

btnStudents.addEventListener("click", async () => {
    const studentResults = await getStudents()
    clearStudentDisplay()
    displayStudents(studentResults)
})