import { TestBed } from '@angular/core/testing';

import { XmlUploadService } from './xml-upload.service';

describe('XmlUploadService', () => {
  let service: XmlUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
