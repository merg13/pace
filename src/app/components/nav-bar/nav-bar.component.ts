import { Component, Input, OnInit } from '@angular/core';
import { SportTypeEnum } from 'src/app/enums/PaceEnums';
import { PaceSportTypeModel } from 'src/app/models/PaceSportTypeModel';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @Input()
  paceSportTypeModel = {
    addRunInput: true,
    addBikeInput: false,
    addSwimInput: false,
    addKilometers: true,
    addMiles: true
  } as PaceSportTypeModel;

  constructor(private formService: FormService) { }

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

  initInputs = (e: Event) => {
    if(this.paceSportTypeModel.addRunInput) this.formService.PostForm(this.formService.GetNewForm(SportTypeEnum.Run));
    if(this.paceSportTypeModel.addBikeInput) this.formService.PostForm(this.formService.GetNewForm(SportTypeEnum.Bike));
    if(this.paceSportTypeModel.addSwimInput) this.formService.PostForm(this.formService.GetNewForm(SportTypeEnum.Swim));
  }

  handleClear = (e: Event) => {
    this.formService.DeleteAllForms();
  }
}
