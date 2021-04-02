import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

    runButtonSelector : HTMLElement;
    bikeButtonSelector : HTMLElement;
    swimButtonSelector: HTMLElement;
    mileButtonSelector: HTMLElement;
    kilometerButtonSelector: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.runButtonSelector = document.getElementById("runToggle");
    this.bikeButtonSelector = document.getElementById("bikeToggle");
    this.swimButtonSelector = document.getElementById("swimToggle");

    this.mileButtonSelector = document.getElementById("mileToggle");
    this.kilometerButtonSelector = document.getElementById("kilometerToggle");
  }

  toggleKilometers() {
    let isToggled = this.kilometerButtonSelector.classList.contains('darken-1');

      isToggled ?
        this.kilometerButtonSelector.classList.remove('darken-1', 'white-text') :
        this.kilometerButtonSelector.classList.add('darken-1', 'white-text');

    this.kilometerIsToggled.emit(!isToggled);
  }

  toggleMiles() {
    let isToggled = this.mileButtonSelector.classList.contains('darken-1');

      isToggled ?
        this.mileButtonSelector.classList.remove('darken-1', 'white-text') :
        this.mileButtonSelector.classList.add('darken-1', 'white-text');

    this.mileIsToggled.emit(!isToggled);
  }

  toggleRun() {
    let isToggled = this.runButtonSelector.classList.contains('darken-1');

    isToggled ?
      this.runButtonSelector.classList.remove('darken-1') :
      this.runButtonSelector.classList.add('darken-1');

  this.runIsToggled.emit(!isToggled);
  }

  toggleBike() {
    let isToggled = this.bikeButtonSelector.classList.contains('darken-1');

      isToggled ?
        this.bikeButtonSelector.classList.remove('darken-1') :
        this.bikeButtonSelector.classList.add('darken-1');

    this.bikeIsToggled.emit(!isToggled);
  }

  toggleSwim() {
    let isToggled = this.swimButtonSelector.classList.contains('darken-1');

      isToggled ?
        this.swimButtonSelector.classList.remove('darken-1') :
        this.swimButtonSelector.classList.add('darken-1');

    this.swimIsToggled.emit(!isToggled);
  }
}
