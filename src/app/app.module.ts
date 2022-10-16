import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaceSportTypeComponent } from './components/pace-sport-type/pace-sport-type.component';
import { FormItemComponent } from './components/form-item/form-item.component';
import { FormsModule } from '@angular/forms';
import { PaceStore } from './stores/pace.store';
import { FormService } from './services/form.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    PaceSportTypeComponent,
    FormItemComponent,
    NavBarComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PaceStore, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
