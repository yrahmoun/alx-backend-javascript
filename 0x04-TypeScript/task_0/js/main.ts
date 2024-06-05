interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();

const firstNameHeader = headerRow.insertCell();
firstNameHeader.textContent = 'First Name';

const locationHeader = headerRow.insertCell();
locationHeader.textContent = 'Location';

const tableBody = table.createTBody();

studentsList.forEach(student => {
  const row = tableBody.insertRow();
  const firstNameCell = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
