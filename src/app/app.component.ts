import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges {
  @Input() runIsToggled: boolean = true;
  @Input() bikeIsToggled: boolean = true;
  @Input() swimIsToggled: boolean = true;  

   ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
        console.log(this.runIsToggled);
        console.log(this.bikeIsToggled);
        console.log(this.swimIsToggled);
  }
}





