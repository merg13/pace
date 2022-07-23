import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormService } from './services/form.service';
import { PaceStore } from './stores/pace.store';

describe('AppComponent', () => {
  let component: AppComponent;
  let paceStore: PaceStore;
  let formService: FormService;

  beforeEach(async () => {
    paceStore = new PaceStore();
    formService = new FormService(paceStore);
    component = new AppComponent(formService, paceStore);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
