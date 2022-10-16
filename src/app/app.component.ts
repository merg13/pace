import { Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { PaceTypeEnum, SportTypeEnum } from './enums/PaceEnums';
import { BetterTime } from './models/BetterTime';
import { PaceInputModel } from './models/PaceInputModel';
import { PaceSportTypeModel } from './models/PaceSportTypeModel';
import { EventEmitter } from '@angular/core';
import { PaceStore } from './stores/pace.store';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public resultTitle = "Total Result";

  public inputModels: PaceInputModel[] = [] as PaceInputModel[];
  public totalResultModel: PaceInputModel = new PaceInputModel();


  constructor(private paceStore: PaceStore) {
    paceStore.paceModels.subscribe(data => {
      this.inputModels = data;
    })
  }

  ngOnInit(): void {
    // DEBUG ONLY:
    // this.AddMockData();
  }

  handleFormChangeTotalResult = () => {
    this.HandleTotalResult();
  }

  AnyRunResults(): boolean {
    return this.inputModels.some(m => m.sportType == SportTypeEnum.Run);
  }

  AnyBikeResults(): boolean {
    return this.inputModels.some(m => m.sportType == SportTypeEnum.Bike);
  }

  AnySwimResults(): boolean {
    return this.inputModels.some(m => m.sportType == SportTypeEnum.Swim);
  }

  HandleTotalResult = () => {
    this.totalResultModel = new PaceInputModel();
    this.inputModels.forEach(m => this.calculateResult(m));
  }

  calculateResult(model: PaceInputModel) {
    this.totalResultModel.totalTime.hours += model.totalTime.hours;
    this.totalResultModel.totalTime.minutes += model.totalTime.minutes;
    this.totalResultModel.totalTime.seconds += model.totalTime.seconds;
    this.totalResultModel.distanceKilos = this.totalResultModel.distanceKilos + model.distanceKilos;
    this.totalResultModel.distanceMiles = this.totalResultModel.distanceMiles + model.distanceMiles;
    this.totalResultModel.getKph();
    this.totalResultModel.getMph();
    this.totalResultModel.GetKmPace();
    this.totalResultModel.GetMiPace();
  }
}





