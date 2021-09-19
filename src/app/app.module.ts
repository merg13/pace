import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaceSportTypeComponent } from './pace-sport-type/pace-sport-type.component';
import { FormItemComponent } from './form-item/form-item.component';
import { FormsModule } from '@angular/forms';
import { PaceStore } from './stores/pace.store';
import { FormService } from './services/form.service';

@NgModule({
  declarations: [
    AppComponent,
    PaceSportTypeComponent,
    FormItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PaceStore, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
