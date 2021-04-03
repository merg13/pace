import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaceSportTypeComponent } from './pace-sport-type/pace-sport-type.component';
import { RunFormComponent } from './run-form/run-form.component';
import { BikeFormComponent } from './bike-form/bike-form.component';
import { SwimFormComponent } from './swim-form/swim-form.component';
import { CommonFormComponent } from './common-form/common-form.component';
import { FormItemComponent } from './form-item/form-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaceSportTypeComponent,
    RunFormComponent,
    BikeFormComponent,
    SwimFormComponent,
    CommonFormComponent,
    FormItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
