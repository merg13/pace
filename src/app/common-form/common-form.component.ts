import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SportTypeEnum } from '../enums/PaceEnums';
import { PaceInputModel } from '../models/PaceInputModel';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.css']
})
export class CommonFormComponent implements OnInit {

  constructor() { }

  @Input() showMiles: boolean;
  @Input() showKilometers: boolean;
  @Input() addRunInput: boolean;
  @Input() addBikeInput: boolean;
  @Input() addSwimInput: boolean;


  @Output() PaceFormsEmitter: EventEmitter<PaceInputModel[]>;

  PaceForms: PaceInputModel[];


  ngOnInit(): void {
    this.PaceForms = [] as PaceInputModel[];
    this.PaceFormsEmitter = new EventEmitter<PaceInputModel[]>();
  }

  handleAdd(e: Event) {
    this.initInputs();
    if (this.PaceForms != null && this.PaceForms.length > 0 ) {
      this.PaceFormsEmitter.emit(this.PaceForms);
    }
  }

  handleClear(e: Event) {
    this.PaceForms = [] as PaceInputModel[];
    this.PaceFormsEmitter.emit(this.PaceForms);
  }

  initInputs = () => {

    if(this.addRunInput) {
      var runInput = new PaceInputModel();
      runInput.sportType = SportTypeEnum.Run;
      this.PaceForms.push(runInput);
    }

    if(this.addBikeInput) {
      var bikeInput = new PaceInputModel();
      bikeInput.sportType = SportTypeEnum.Bike;
      this.PaceForms.push(bikeInput);
    }

    if(this.addSwimInput) {
      var swimInput = new PaceInputModel();
      swimInput.sportType = SportTypeEnum.Swim;
      this.PaceForms.push(swimInput);
    }
  }
}
