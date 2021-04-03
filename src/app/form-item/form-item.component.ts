import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SportTypeEnum } from '../enums/PaceEnums';
import { MileToKiloRatio, PaceInputModel } from '../models/PaceInputModel';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

@Output() inputModelEmitter: EventEmitter<PaceInputModel>;

@Input() inputModel: PaceInputModel;
@Input() showKilometers: boolean;
@Input() showMiles: boolean;

  constructor() {

    this.inputModel = new PaceInputModel();
    this.inputModelEmitter = new EventEmitter<PaceInputModel>();
  }

  ngOnInit(): void {

  }

  ConvertMilesToKilos = () => {
    this.inputModel.distanceKilos = this.inputModel.distanceMiles * MileToKiloRatio;
  }

  ConvertKilosToMiles = () => {
    this.inputModel.distanceMiles = this.inputModel.distanceKilos / MileToKiloRatio;
  }

  handleCalculate = () => {
    //TODO: Calculate the output model and emit it back to parent;

  }
}
