export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: "Nick",
  lastName: "Jones",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jack",
  lastName: "Mick",
  age: 21,
  location: "Paris",
};

const studentList: Array<Student> = [
  student1,
  student2,
];

export const renderTable = (studentList: Array<Student>): void => {
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headerRow);

  headerRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headerRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentList) {
    const studentR = document.createElement('tr');
    studentR.insertAdjacentHTML('beforeend', `<td>$(student.firstName)</td>`);
    studentR.insertAdjacentHTML('beforeend', `<tr>$(student.location)</tr>`);
    table.insertAdjacentElement('beforeend', studentR);
  }
  document.body.insertAdjacentElement('beforeend', table);
}
renderTable(studentList);
