import { Observable, catchError } from "rxjs";
import { Student } from "./students.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";



const STUDENTLIST: Student[] = [
    { id: 1, name: "Shoshi", adress: "Rabbi Akiva 15", tel: "055-6727826", active: true, avgMarks: 100, specialization: "advising" },
    { id: 2, name: "Sari", adress: "Rashbi 15", tel: "055-6765562", active: true, avgMarks: 10, specialization: "programming" },
    { id: 3, name: "Rivki", adress: "Rabbi Akiva 150", tel: "055-6799793", active: true, avgMarks: 10, specialization: "graphics" },
    { id: 4, name: "Racheli", adress: "Rabbi Akiva 165", tel: "0504105353", active: false, avgMarks: 100, dateOfLive: new Date('2021/03/08'), specialization: "special-teaching" }
];

@Injectable()
export class StudentServise {
    constructor(private _http: HttpClient) {

    }

    getAllStudents = (): Student[] => {
        return STUDENTLIST;
    }

    getStudentsFromServer = (): Observable<Student[]> => {
        let list = this._http.get<Student[]>("api/Student/all");
        console.log(list);

        return list;
    }


    // postStudent = (s: Student) => {
    //     console.log("in post in client");

    //     //let a=this._http.post("api/Student/${s}",s);
    //     this._http.post(`api/Student/${s}`,s);
    //     //console.log(a);
    // }
    postStudent(s: Student){
        // let options = new Headers();
        // options.append("Content-Type", "application/json");
        // let json = JSON.stringify(s);
        // let requestOptions = {
        //     method: "POST",
        //     headers: options,
        //     body: json,
        //     redirect: "follow",
        // };

        // return this._http.post<Student>(`api/Student/${s}`, requestOptions);
        const params = new HttpParams({fromString: 'name=term'});
        this._http.request('POST', `api/Student/${s}`, {responseType:'json', params});
    }

}