import { PaceTypeEnum, SportTypeEnum } from "../enums/PaceEnums";
import { BetterTime } from "./BetterTime";

export class PaceInputModel {

    paceType: PaceTypeEnum
    sportType: SportTypeEnum;
    duration: BetterTime;
    distanceMiles: number;
    distanceKilos: number;
}