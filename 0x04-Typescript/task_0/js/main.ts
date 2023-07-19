interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'James',
    lastName: 'Ward',
    age: 22,
    location: 'California'
};

const student2: Student = {
    firstName: 'Lilian',
    lastName: 'Lee',
    age: 19,
    location: 'Beijing'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
});

document.body.appendChild(table);