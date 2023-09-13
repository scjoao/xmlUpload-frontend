import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlUploadComponent } from './xml-upload.component';

describe('XmlUploadComponent', () => {
  let component: XmlUploadComponent;
  let fixture: ComponentFixture<XmlUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XmlUploadComponent]
    });
    fixture = TestBed.createComponent(XmlUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
