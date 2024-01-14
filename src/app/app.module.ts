import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Appcomponent } from "./app.component";
import { SecondComponent } from './students/second/second.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { ReactiveFormsModule } from "@angular/forms";
import { StudentServise } from "./students/student.service";
import { PromiseStudent } from "./students/promise-student.servise";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { StudentsModule } from "./students/students.module";

@NgModule({
    declarations:[Appcomponent],
    providers:[],
    imports:[BrowserModule,StudentsModule],
    bootstrap:[Appcomponent]
})

export class AppModule {

}