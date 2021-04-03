import { Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { PaceTypeEnum, SportTypeEnum } from './enums/PaceEnums';
import { BetterTime } from './models/BetterTime';
import { PaceInputModel } from './models/PaceInputModel';
import { PaceSportTypeModel } from './models/PaceSportTypeModel';
import { BaseFormResultFactory } from './services/BaseFormResultFactory';
import { IFormResult } from './interfaces/IFormResult';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {

  @Input() paceSportTypeModel : PaceSportTypeModel;
  @Input() inputModels: PaceInputModel[];
  @Input() resultModels: IFormResult[];

  baseFormResultFactory: BaseFormResultFactory;

  ngOnInit(): void {
    this.paceSportTypeModel =
    {
      addRunInput: true,
      addBikeInput: false,
      addSwimInput: false,
      addKilometers: true,
      addMiles: true
    };

    this.inputModels = [] as PaceInputModel[];
    // this.AddMockData();

    this.baseFormResultFactory = new BaseFormResultFactory();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.GetResults();
  }

  handleModelChange(models: PaceInputModel[]) {
    this.inputModels = models;
  }

  runIsToggled(isToggled: boolean) {
    this.paceSportTypeModel.addRunInput = isToggled;
  }
  bikeIsToggled(isToggled: boolean) {
    this.paceSportTypeModel.addBikeInput = isToggled;
  }
  swimIsToggled(isToggled: boolean) {
    this.paceSportTypeModel.addSwimInput = isToggled;
  }


  KilometersIsToggled(isToggled: boolean) {
    this.paceSportTypeModel.addKilometers = isToggled;
  }

  MilesIsToggled(isToggled: boolean) {
    this.paceSportTypeModel.addMiles = isToggled;
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


  // AddMockData = () => {
  //   this.inputModels = [
  //     {
  //       paceType: PaceTypeEnum.Miles,
  //       sportType: SportTypeEnum.Run,
  //       totalTime: new Time(),
  //       distanceMiles: 5,
  //       distanceKilos: 8,
  //       paceMiles: 0,
  //       paceKilos: 0
  //     },
  //     {
  //       paceType: PaceTypeEnum.Miles,
  //       sportType: SportTypeEnum.Bike,
  //       totalTime: new Time(),
  //       distanceMiles: 5,
  //       distanceKilos: 8,
  //       paceMiles: 0,
  //       paceKilos: 0
  //     },
  //     {
  //       paceType: PaceTypeEnum.Miles,
  //       sportType: SportTypeEnum.Swim,
  //       totalTime: new Time(),
  //       distanceMiles: 1,
  //       distanceKilos: 2,
  //       paceMiles: 0,
  //       paceKilos: 0
  //     }
  //   ]
  // }

  GetResults = () => {
    this.resultModels = this.baseFormResultFactory.resolve(this.inputModels);
  }
}





