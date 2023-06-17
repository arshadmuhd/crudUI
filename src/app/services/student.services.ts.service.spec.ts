import { TestBed } from '@angular/core/testing';

import { StudentServicesTsService } from './student.services.ts.service';

describe('StudentServicesTsService', () => {
  let service: StudentServicesTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentServicesTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
