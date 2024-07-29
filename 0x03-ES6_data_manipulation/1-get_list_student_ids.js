exports default function getListStudentIds(students) {
  if (students is instanceof Array) {
    return students.map((students) => students.id);
  }
  return [];
}
