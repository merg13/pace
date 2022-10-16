import { Component, Input, OnInit } from '@angular/core';
import { PaceInputModel } from 'src/app/models/PaceInputModel';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input()
  public title: string = "Result";

  @Input()
  public model: PaceInputModel = new PaceInputModel();

  constructor() { }

  ngOnInit(): void {
  }

}
