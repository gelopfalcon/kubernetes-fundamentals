import { TestBed } from '@angular/core/testing';

import { ContactListService } from './contact-list.service';

describe('ContactListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactListService = TestBed.get(ContactListService);
    expect(service).toBeTruthy();
  });
});
