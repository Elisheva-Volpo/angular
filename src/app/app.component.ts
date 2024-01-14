import { Component } from "@angular/core";


@Component({
    templateUrl: "./app.component.html",
    selector: "app-root"
})
export class Appcomponent {
    x: number = 8;
    title: string = "Good year!!!!";

    greetingPerTime = (): string => {
        let now: Date = new Date;
        if(now.getHours()>6&&now.getHours()<12){
            return "Good morning!!!!!!!!!!!";
        }
        if(now.getHours()>12&&now.getHours()<18){
            return "Good afternoon!!!!!!!!!!!";
        }
        return "Good night!!!!!!!!";
    }
}