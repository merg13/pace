import { Component, OnInit } from '@angular/core';
import { IFormResult } from '../interfaces/IFormResult';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css']
})
export class BikeFormComponent implements OnInit, IFormResult {

  constructor() { }

  ngOnInit(): void {
  }

}
