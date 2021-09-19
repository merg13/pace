import { Injectable } from '@angular/core';
import { PaceTypeEnum, SportTypeEnum } from '../enums/PaceEnums';
import { PaceInputModel } from '../models/PaceInputModel';
import { PaceStore } from '../stores/pace.store';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private paceStore: PaceStore) { }

  //Use Cases:
    // GET - New Form based on Type
    // POST - Form to Store
    // Put - Form to Store
    // DELETE - Form from Store

    public GetNewForm(type: SportTypeEnum): PaceInputModel {
        return this.CreateForm(type);
    }

    public PostForm(form: PaceInputModel): void {
      try {
        this.paceStore.paceModels.getValue().push(form);
      }
      catch (e) {
        console.log('error during POST - form at form.service');
      }
    }

    public PutForm(form: PaceInputModel): void {
      try {
        var index = this.paceStore.paceModels.getValue().findIndex(f => f.formId == form.formId)
        this.paceStore.paceModels.getValue()[index] = form;
      }
      catch (e) {
        console.log('error during PUT - ' + form.formId + ' - form at form.service');
      }
    }

    public DeleteForm(form: PaceInputModel): void {
      try{
        var index = this.paceStore.paceModels.getValue().findIndex(f => f.formId == form.formId)
        this.paceStore.paceModels.getValue().splice(index, 1);
      }
      catch (e) {
        console.log('error during DELETE - ' + form.formId + ' - form at form.service');
      }
    }

    public DeleteAllForms(): void {
      try{
        this.paceStore.paceModels.next([] as PaceInputModel[]);
      }
      catch(e) {
        console.log('error during DELETE all pace forms');
      }
    }

    private CreateForm = (type: SportTypeEnum) => {
      var model = new PaceInputModel();
      model.sportType = type;
      return model;
    }
}
