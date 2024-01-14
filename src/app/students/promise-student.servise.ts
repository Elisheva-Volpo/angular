import { Student } from "./students.model";
import { Injectable } from "@angular/core";

const STUDENTLIST: Student[] = [
    { id: 1, name: "Shoshi", adress: "Rabbi Akiva 15", tel: "055-6727826", active: true, avgMarks: 100, specialization: "advising" },
    { id: 2, name: "Sari", adress: "Rashbi 15", tel: "055-6765562", active: true, avgMarks: 10, specialization: "programming" },
    { id: 3, name: "Rivki", adress: "Rabbi Akiva 150", tel: "055-6799793", active: true, avgMarks: 10, specialization: "graphics" },
    { id: 4, name: "Racheli", adress: "Rabbi Akiva 165", tel: "0504105353", active: false, avgMarks: 100, dateOfLive: new Date('2021/03/08'), specialization: "special-teaching" }
]


export class PromiseStudent{

    getAllStudentsAsync = (): Promise<Student[]> => {

        return new Promise((res, rej)=>{
            setTimeout(() => {
                res(STUDENTLIST);
                
            }, 3000);

        });
    }

}