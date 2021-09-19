import { Time } from "@angular/common";
import { PaceTypeEnum, SportTypeEnum } from '../enums/PaceEnums';
import { BetterTime } from "./BetterTime";
import { element } from 'protractor';
import { ObjectUnsubscribedError } from "rxjs";
import { v4 as uuidv4 } from 'uuid';


// 1 mile is the same as 1.60934 kilometers
export const MileToKiloRatio: number = 1.60934;
export class PaceInputModel {

    formId: string = uuidv4();
    paceType: PaceTypeEnum = PaceTypeEnum.Miles;
    sportType: SportTypeEnum = SportTypeEnum.Run;
    totalTime: BetterTime = { hours: 0, minutes: 0, seconds: 0};
    distanceMiles: number = 0;
    distanceKilos: number = 0;
    paceMiles: BetterTime = { hours: 0, minutes: 0, seconds: 0};
    paceKilos: BetterTime = { hours: 0, minutes: 0, seconds: 0};
    mph: number = 0;
    kph: number = 0;

    handleMilesOnChange = () => {
        if (this.distanceMiles != null && this.distanceMiles != 0) {
          this.ConvertMilesToKilos();
          this.GetMiPace();
          this.GetKmPace();
          this.getMph();
          this.getKph();
        }
      }

    handleKilosOnChange = () => {
      if (this.distanceKilos != null && this.distanceKilos != 0) {
        this.ConvertKilosToMiles();
        this.GetKmPace();
        this.GetMiPace();
        this.getMph();
        this.getKph();
      }
    }

    GetTotalMins(): number {
      return (this.totalTime.hours * 60) +
              this.totalTime.minutes +
              (this.totalTime.seconds / 60);
    }

    getMph = () => {
      this.mph = this.distanceMiles / (this.GetTotalMins() / 60);
    }

    getKph = () => {
      this.kph = this.distanceKilos / (this.GetTotalMins() / 60);
    }

    GetMiPace = () => {
      let tempResult  =  (this.GetTotalMins() / this.distanceMiles);
      let minutes = Math.floor(tempResult);
      let seconds = (tempResult - minutes) * 60;

      this.paceMiles =  { hours: 0, minutes: minutes, seconds: seconds };
    }

    GetKmPace = () => {
      let tempResult  =  (this.GetTotalMins() / this.distanceKilos);
      let minutes = Math.floor(tempResult);
      let seconds = (tempResult - minutes) * 60;

      this.paceKilos =  { hours: 0, minutes: minutes, seconds: seconds };
    }

    ConvertMilesToKilos = () => {
      this.distanceKilos = this.distanceMiles * MileToKiloRatio;
    }

    ConvertKilosToMiles = () => {
      this.distanceMiles = this.distanceKilos / MileToKiloRatio;
    }


}
