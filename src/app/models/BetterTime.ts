import { Time } from "@angular/common";

export class BetterTime implements Time{
    hours: number;
    minutes: number;
    seconds: number;


    toString(): string {
        return "${hours}hr" + " ${minutes}min" + " ${seconds}sec";
    }
}
