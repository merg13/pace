import { Component, Input, OnInit, Output } from '@angular/core';
import { SportTypeEnum } from '../enums/PaceEnums';
import { PaceInputModel } from '../models/PaceInputModel';
import { EventEmitter } from '@angular/core';

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


  @Output() paceFormsEmitter: EventEmitter<PaceInputModel[]> = new EventEmitter<PaceInputModel[]>();;

  PaceForms: PaceInputModel[] = [] as PaceInputModel[];


  ngOnInit(): void {
  }

  handleAdd(e: Event) {
    this.initInputs();
    if (this.PaceForms != null && this.PaceForms.length > 0 ) {
      this.paceFormsEmitter.emit(this.PaceForms);
    }
  }

  handleClear(e: Event) {
    this.PaceForms = [] as PaceInputModel[];
    this.paceFormsEmitter.emit(this.PaceForms);
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
