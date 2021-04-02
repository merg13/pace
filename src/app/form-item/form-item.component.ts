import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SportTypeEnum } from '../enums/PaceEnums';
import { PaceInputModel } from '../models/PaceInputModel';
import { PaceResultModel } from '../models/PaceResultModel';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

@Output() inputModelEmitter: EventEmitter<PaceInputModel>;
@Output() ouputModelEmitter: EventEmitter<PaceResultModel>;

@Input() inputModel: PaceInputModel;
@Input() outputModel: PaceResultModel;
@Input() showKilometers: boolean;
@Input() showMiles: boolean;

  constructor() {

    this.inputModel = new PaceInputModel();
    this.outputModel = new PaceResultModel();

    this.inputModelEmitter = new EventEmitter<PaceInputModel>();
    this.ouputModelEmitter = new EventEmitter<PaceResultModel>();
  }

  ngOnInit(): void {

  }

  handleCalculate = () => {
    //TODO: Calculate the output model and emit it back to parent;

  }
}
