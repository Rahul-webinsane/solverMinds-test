import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldValidateComponent } from './field-validate.component';

describe('FieldValidateComponent', () => {
  let component: FieldValidateComponent;
  let fixture: ComponentFixture<FieldValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
