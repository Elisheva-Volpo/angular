import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Appcomponent } from "./app.component";
import { StudentsModule } from "./students/students.module";
import { Route,RouterModule } from "@angular/router";
import { SecondComponent } from "./students/second/second.component";
import { HomeComponent } from "./home/home.component";

const APP_ROUTES:Route[]=[
    {path:"",component:HomeComponent,pathMatch:"full"},
    {path:"students",component:SecondComponent},


]

@NgModule({
    declarations:[Appcomponent],
    providers:[],
    imports:[BrowserModule,StudentsModule,RouterModule.forRoot(APP_ROUTES)],
    bootstrap:[Appcomponent]
})

export class AppModule {

}