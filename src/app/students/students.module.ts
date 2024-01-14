import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentServise } from './student.service';
import { PromiseStudent } from './promise-student.servise';
import { SecondComponent } from './second/second.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SecondComponent,StudentDetailsComponent],
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule],
  providers:[StudentServise,PromiseStudent],
  exports:[SecondComponent]
})
export class StudentsModule { }
