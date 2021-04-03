import { IFormResult } from '../interfaces/IFormResult';
import { IFormResultFactory } from '../interfaces/IFormResultFactory';
import { SportTypeEnum } from '../enums/PaceEnums';
import { RunFormComponent } from '../run-form/run-form.component';
import { BikeFormComponent } from '../bike-form/bike-form.component';
import { SwimFormComponent } from '../swim-form/swim-form.component';
import { PaceInputModel } from '../models/PaceInputModel';

export class BaseFormResultFactory implements IFormResultFactory {

  resolve(models: PaceInputModel[]): IFormResult[] {

    let results = [] as IFormResult[];

    for(var m of models) {
      if(m.sportType == SportTypeEnum.Run){
        results.push(new RunFormComponent());
      }
      if(m.sportType ==SportTypeEnum.Bike) {
        results.push(new BikeFormComponent());
      }
      if(m.sportType == SportTypeEnum.Swim){
        results.push(new SwimFormComponent());
      }
    }
    return results;

  }
}
