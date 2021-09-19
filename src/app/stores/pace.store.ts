import { BehaviorSubject } from 'rxjs';
import { PaceTypeEnum } from '../enums/PaceEnums';
import { IStore } from '../interfaces/IStore';
import { PaceInputModel } from '../models/PaceInputModel';

// No Logic in this class... just props.
export class PaceStore implements IStore {

  // Busy signal for the entire SPA.
  public isBusy: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // Current Setting for KM/Miles for entire SPA.
  public metrics: BehaviorSubject<PaceTypeEnum> = new BehaviorSubject<PaceTypeEnum>(PaceTypeEnum.Miles);

  // Main array of models for the entire SPA. readonly access from the store... service is the only way to change this var.
  public readonly paceModels: BehaviorSubject<PaceInputModel[]> = new BehaviorSubject<PaceInputModel[]>([]);

}
