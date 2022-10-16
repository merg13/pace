import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormService } from '../../services/form.service';
import { PaceStore } from '../../stores/pace.store';

import { FormItemComponent } from './form-item.component';

describe('FormItemComponent', () => {
  let component: FormItemComponent;
  let fixture: ComponentFixture<FormItemComponent>;
  let formService: FormService;
  let paceStore: PaceStore;

  beforeEach(async () => {
    paceStore = new PaceStore();
    formService = new FormService(paceStore);
    component = new FormItemComponent(formService, paceStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
