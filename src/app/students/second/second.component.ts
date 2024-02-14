import { Component } from '@angular/core';
import { Student } from '../students.model';
import { StudentServise } from '../student.service';
import { PromiseStudent } from '../promise-student.servise';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  studentList: Student[] = [];
  students$: Observable<string> | undefined;
  studentsList$: Observable<Student> | undefined;
  subStudent?: Subscription;
  sub?: Subscription;

  constructor(private studentServise: StudentServise) {
    // studentServise.getAllStudentsAsync()
    //   .then((list: Student[]) => {
    //     this.studentList = list;
    //     this.students$=new Observable<string>((obs)=>{
    //       this.studentList.forEach(std=>{
    //         obs.next(std.name);
    //       })
    //     });

    this.studentServise.getStudentsFromServer().subscribe(data =>
      this.studentList = data);
    // this.students$ = new Observable<string>((obs) => {
    //   this.studentList.forEach(std => {
    //     obs.next(std.name);
    //     this.subStudent = this.students$.subscribe((name) => {
    //       console.log(name);
    //     });
    //     this.studentsList$ = new Observable((obs) => {
    //       this.studentList.forEach(std => {
    //         obs.next(std);
    //       })
    //     });
    //     this.sub = this.studentsList$.pipe(
    //       map(stud => stud.name)
    //     ).subscribe((name) => {
    //       console.log(name);
    //     });
    //   })



  }

  selectedStudent?: Student;

  editStudent = (studentToEdit: Student) => {
    this.selectedStudent = studentToEdit;
  }

  is: boolean = false;

  deleteStudent = (id: number) => {

    this.studentServise.deleteStudent(id);
    this.studentServise.getStudentsFromServer().subscribe(data => {
      this.studentList = data;
    });
    // const studentToDelete = this.studentList.find(x => x.id == id);
    // if (studentToDelete) {
    //   const index = this.studentList.indexOf(studentToDelete);
    //   this.studentList.splice(index, 1);
    // }
  }

  addNewStudent = () => {
    //let id = this.studentList[this.studentList.length - 1].id + 1;
    this.selectedStudent = { id: 0, name: "someone", adress: "Rashi 20", tel: "053-1472588", active: true, avgMarks: 100 };
  }

  saveStudentToList = (studentToSave: Student) => {
    if (studentToSave.id == 0) {
      studentToSave.id = this.studentList[this.studentList.length - 1].id + 1;
      console.log('before');
      
      this.studentServise.postStudent(studentToSave);
      // this.studentList.push(studentToSave);
      console.log('after');
      console.log();
      

      this.is = true;
      console.log(studentToSave);

    }
    else {
      let studentToUpdate = this.studentList.find(x => x.id == studentToSave.id);
      if (studentToUpdate) {
        const index = this.studentList.indexOf(studentToUpdate);
        this.studentList[index] = studentToSave;
      }

    }
    this.studentServise.getStudentsFromServer().subscribe(data => {
      this.studentList = data;
    });
    this.selectedStudent = undefined;
    this.is = true;
    setTimeout(() => {

      this.is = false;

    }, 3000);

  }



}
