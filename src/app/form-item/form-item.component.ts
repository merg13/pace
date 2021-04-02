import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SportTypeEnum } from '../enums/PaceEnums';
import { PaceInputModel } from '../models/PaceInputModel';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

@Output() modelEmitter: EventEmitter<PaceInputModel>;
@Input() model: PaceInputModel;
sports: SportTypeEnum;
  constructor() { }

  ngOnInit(): void {
    this.model = new PaceInputModel();
    this.modelEmitter = new EventEmitter<PaceInputModel>();
    this.model.sportType = SportTypeEnum.Run;
  }



  handleCalculate() {

  }


  changeSport(e: Event){

  }
}
