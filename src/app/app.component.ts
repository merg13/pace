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

export class AppComponent implements OnInit, OnChanges {

  public paceSportTypeModel : PaceSportTypeModel = {} as PaceSportTypeModel;
  public inputModels: PaceInputModel[] = [] as PaceInputModel[];
  public totalResultModel: PaceInputModel = new PaceInputModel();


  constructor(private formService: FormService, private paceStore: PaceStore) {
    paceStore.paceModels.subscribe(data => {
      this.inputModels = data;
    })
  }

  ngOnInit(): void {
    this.paceSportTypeModel =
    {
      addRunInput: true,
      addBikeInput: false,
      addSwimInput: false,
      addKilometers: true,
      addMiles: true
    };

    // DEBUG ONLY:
    // this.AddMockData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // this.GetResults();
    this.HandleTotalResult();
  }

  handleModelChange(models: PaceInputModel[]) {
    this.inputModels = models;
    this.HandleTotalResult();
  }

  initInputs = (e: Event) => {
    if(this.paceSportTypeModel.addRunInput) this.formService.PostForm(this.formService.GetNewForm(SportTypeEnum.Run));
    if(this.paceSportTypeModel.addBikeInput) this.formService.PostForm(this.formService.GetNewForm(SportTypeEnum.Bike));
    if(this.paceSportTypeModel.addSwimInput) this.formService.PostForm(this.formService.GetNewForm(SportTypeEnum.Swim));
  }

  handleClear = (e: Event) => {
    this.formService.DeleteAllForms();
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
}





