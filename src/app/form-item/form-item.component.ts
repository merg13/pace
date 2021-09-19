import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SportTypeEnum, PaceTypeEnum } from '../enums/PaceEnums';
import { MileToKiloRatio, PaceInputModel } from '../models/PaceInputModel';
import { FormService } from '../services/form.service';
import { PaceStore } from '../stores/pace.store';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

  @Input() public form: PaceInputModel = { } as PaceInputModel;
  @Input() metrics: PaceTypeEnum = PaceTypeEnum.Miles;

  constructor(private formSerivce: FormService, private paceStore:PaceStore) { }
  ngOnInit(): void {}

  handleFormInputChange(changedForm: PaceInputModel) {
    this.form.handleKilosOnChange();
    this.form.handleMilesOnChange();
    this.formSerivce.PutForm(changedForm);
  }

  ConvertMilesToKilos = () => {
    this.form.distanceKilos = this.form.distanceMiles * MileToKiloRatio;
  }

  ConvertKilosToMiles = () => {
    this.form.distanceMiles = this.form.distanceKilos / MileToKiloRatio;
  }

  isMetricsMiles = (): boolean => {
    return this.metrics == PaceTypeEnum.Miles;
  }
  handleCalculate = () => {
    //TODO: Calculate the output model and emit it back to parent;

  }
}
