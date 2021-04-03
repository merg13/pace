import { Component, OnInit } from '@angular/core';
import { IFormResult } from '../interfaces/IFormResult';

@Component({
  selector: 'app-run-form',
  templateUrl: './run-form.component.html',
  styleUrls: ['./run-form.component.css']
})
export class RunFormComponent implements OnInit, IFormResult {

  constructor() { }

  ngOnInit(): void {
  }

}
