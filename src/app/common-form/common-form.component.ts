import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaceInputModel } from '../models/PaceInputModel';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.css']
})
export class CommonFormComponent implements OnInit {

  constructor() { }


  @Output() PaceFormsEmitter: EventEmitter<PaceInputModel[]>;

  PaceForms: PaceInputModel[];


  ngOnInit(): void {
    this.PaceForms = [] as PaceInputModel[];
    this.PaceFormsEmitter = new EventEmitter<PaceInputModel[]>();
  }

  handleAdd(e: Event) {
    this.PaceForms.push(new PaceInputModel());
    // this.PaceForms.push(e);
    if (this.PaceForms != null && this.PaceForms.length > 0 ) {
      this.PaceFormsEmitter.emit(this.PaceForms);
    }
  }

  handleClear(e: Event) {
    this.PaceForms = [] as PaceInputModel[];
    this.PaceFormsEmitter.emit(this.PaceForms);
  }
}
