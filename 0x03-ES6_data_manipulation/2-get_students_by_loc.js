export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((students) => students.location === city);
  }
  return [];
}
