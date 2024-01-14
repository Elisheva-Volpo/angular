
export class Student {
    id:number=0;
    name?:string;
    active:boolean=true;
    adress?:string;
    avgMarks:number=100;
    tel?:string;
    dateOfLive?:Date;
    year?:Year;
    specialization?:string="teaching";

}

export enum Year{
    a=1,
    b=2,
    c=3
}