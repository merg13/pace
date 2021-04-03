import { IFormResult } from "./IFormResult";
import { SportTypeEnum } from '../enums/PaceEnums';
import { PaceInputModel } from '../models/PaceInputModel';

export interface IFormResultFactory {

  resolve(models: PaceInputModel[]): IFormResult[];
}
