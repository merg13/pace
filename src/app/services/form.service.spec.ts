import { TestBed } from '@angular/core/testing';
import { PaceStore } from '../stores/pace.store';

import { FormService } from './form.service';

describe('FormService', () => {
  let service: FormService;
  let paceStore: PaceStore;

  beforeEach(() => {
    service = new FormService(paceStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
