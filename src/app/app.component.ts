import { Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { PaceTypeEnum, SportTypeEnum } from './enums/PaceEnums';
import { BetterTime } from './models/BetterTime';
import { PaceInputModel } from './models/PaceInputModel';
import { PaceResultModel } from './models/PaceResultModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {

  @Input() addRunInput: boolean = true;
  @Input() addBikeInput: boolean = true;
  @Input() addSwimInput: boolean = true;

  @Input() showKilometers: boolean = true;
  @Input() showMiles: boolean = true;

  inputModels: PaceInputModel[];
  resultModels: PaceResultModel[];

  ngOnInit(): void {
    this.inputModels = [] as PaceInputModel[];
    this.resultModels = [] as PaceResultModel[];
    this.AddMockData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    console.log(this.runIsToggled);
    console.log(this.bikeIsToggled);
    console.log(this.swimIsToggled);
    console.log(this.showKilometers);
    console.log(this.showMiles);
  }

  runIsToggled(isToggled: boolean) {
    this.addRunInput = isToggled;
  }
  bikeIsToggled(isToggled: boolean) {
    this.addBikeInput = isToggled;
  }
  swimIsToggled(isToggled: boolean) {
    this.addSwimInput = isToggled;
  }


  KilometersIsToggled(isToggled: boolean) {
    this.showKilometers = isToggled;
  }

  MilesIsToggled(isToggled: boolean) {
    this.showMiles = isToggled;
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


  AddMockData = () => {
    this.inputModels = [
      {
        paceType: PaceTypeEnum.Miles,
        sportType: SportTypeEnum.Run,
        duration: new BetterTime(),
        distanceMiles: 5,
        distanceKilos: 8
      },
      {
        paceType: PaceTypeEnum.Miles,
        sportType: SportTypeEnum.Bike,
        duration: new BetterTime(),
        distanceMiles: 5,
        distanceKilos: 8
      },
      {
        paceType: PaceTypeEnum.Miles,
        sportType: SportTypeEnum.Swim,
        duration: new BetterTime(),
        distanceMiles: 1,
        distanceKilos: 2
      }
    ]
  }
}





