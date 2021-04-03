import { Component, OnInit } from '@angular/core';
import { IFormResult } from '../interfaces/IFormResult';

@Component({
  selector: 'app-swim-form',
  templateUrl: './swim-form.component.html',
  styleUrls: ['./swim-form.component.css']
})
export class SwimFormComponent implements OnInit, IFormResult {

  constructor() { }

  ngOnInit(): void {
  }

}
