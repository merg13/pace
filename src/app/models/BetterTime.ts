export class BetterTime {

    hours: number;
    minutes: number;
    seconds: number;


    toString(): string {
        return "${hours}hr" + " ${minutes}min" + " ${seconds}sec";
    }
}