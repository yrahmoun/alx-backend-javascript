export default function updateStudentGradeByCity(students, city, newGrades,) {
  const studentsCity = students.filter(
    (student) => student.location === city,
  );

  const gradeStudents = studentsCity.map(
    (student) => {
      for (const gradeInfo of newGrades) {
        if (student.id === gradeInfo.studentId) {
          student.grade = gradeInfo.grade; // eslint-disable-line no-param-reassign
        }
      }
      if (student.grade === undefined) {
        student.grade = 'N/A'; // eslint-disable-line no-param-reassign
      }
      return student;
    },
  );

  return gradeStudents;
}
