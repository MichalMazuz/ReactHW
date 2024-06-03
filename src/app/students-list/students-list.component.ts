import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html'
})
export class StudentsListComponent {
  // d: Date = new Date();

  students: Student[] = [
    {
      id: 1,
      firstN: 'michal',
      lastN: 'mazuz',
      address: 'bar ilan',
      phone: '0504107969',
      status: true,
      avg: 97,
      dateL: new Date('2024-01-01')
    },
    {
      id: 2,
      firstN: 'shira',
      lastN: 'mazuz',
      address: 'bar ilan',
      phone: '0505557969',
      status: false,
      avg: 95,
      dateL: new Date('2024-01-01')
    }
  ];

  selectesdStudent: any;

  deleteStudent(id: number) {
    const indexToDelete = this.students.findIndex(student => student.id === id);
    if (indexToDelete !== -1) {
      this.students.splice(indexToDelete, 1);
    }
  }

  updateStudent(studentToShow: Student) {
    this.selectesdStudent = studentToShow;
  }
  addStudent() {
      this.selectesdStudent=true;
  }
}
