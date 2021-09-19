import { Time } from "@angular/common";

export class BetterTime implements Time{
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;


    toString(): string {
        return "${hours}hr" + " ${minutes}min" + " ${seconds}sec";
    }
}
