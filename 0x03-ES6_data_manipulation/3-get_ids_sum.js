export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevstudent, currstudent) =>  prevstudent + currstudent.id, 0,
    );
  }
  return 0;
}
