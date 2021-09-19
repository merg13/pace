import { BehaviorSubject } from "rxjs";

export interface IStore {
  isBusy: BehaviorSubject<boolean>;
}
