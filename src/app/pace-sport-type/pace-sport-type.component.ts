import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaceSportTypeModel } from '../models/PaceSportTypeModel';

@Component({
  selector: 'app-pace-sport-type',
  templateUrl: './pace-sport-type.component.html',
  styleUrls: ['./pace-sport-type.component.css']
})
export class PaceSportTypeComponent implements OnInit, AfterViewInit
  //Called after every check of the component's view. Applies to components only.
  //Add 'implements AfterViewChecked' to the class.
  {

  @Output() runIsToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() bikeIsToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() swimIsToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() mileIsToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() kilometerIsToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() model: PaceSportTypeModel = {} as PaceSportTypeModel;

    runButtonSelector : HTMLElement | null = null;
    bikeButtonSelector : HTMLElement | null = null;
    swimButtonSelector: HTMLElement | null = null;
    mileButtonSelector: HTMLElement | null = null;
    kilometerButtonSelector: HTMLElement | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.runButtonSelector = document.getElementById("runToggle");
    this.bikeButtonSelector = document.getElementById("bikeToggle");
    this.swimButtonSelector = document.getElementById("swimToggle");

    this.mileButtonSelector = document.getElementById("mileToggle");
    this.kilometerButtonSelector = document.getElementById("kilometerToggle");

    this.toggleRun();
    this.toggleMiles();
    this.toggleKilometers();
  }

  toggleKilometers() {
    this.model.addKilometers = this.kilometerButtonSelector?.classList?.contains('darken-1') ?? null;

    this.model.addKilometers ?
        this.kilometerButtonSelector?.classList.remove('darken-1', 'white-text') :
        this.kilometerButtonSelector?.classList.add('darken-1', 'white-text');

    this.kilometerIsToggled.emit(!this.model.addKilometers);
  }

  toggleMiles() {
    this.model.addMiles = this.mileButtonSelector?.classList.contains('darken-1') ?? null;

    this.model.addMiles ?
        this.mileButtonSelector?.classList.remove('darken-1', 'white-text') :
        this.mileButtonSelector?.classList.add('darken-1', 'white-text');


    this.mileIsToggled.emit(!this.model.addMiles);
  }

  toggleRun() {
    this.model.addRunInput = this.runButtonSelector?.classList.contains('darken-1') ?? null;

    this.model.addRunInput ?
      this.runButtonSelector?.classList.remove('darken-1') :
      this.runButtonSelector?.classList.add('darken-1');

  this.runIsToggled.emit(!this.model.addRunInput);
  }

  toggleBike() {
    this.model.addBikeInput = this.bikeButtonSelector?.classList.contains('darken-1') ?? null;

    this.model.addBikeInput ?
        this.bikeButtonSelector?.classList.remove('darken-1') :
        this.bikeButtonSelector?.classList.add('darken-1');

    this.bikeIsToggled.emit(!this.model.addBikeInput);
  }

  toggleSwim() {
    this.model.addSwimInput = this.swimButtonSelector?.classList.contains('darken-1') ?? null;

    this.model.addSwimInput ?
        this.swimButtonSelector?.classList.remove('darken-1') :
        this.swimButtonSelector?.classList.add('darken-1');

    this.swimIsToggled.emit(!this.model.addSwimInput);
  }
}
