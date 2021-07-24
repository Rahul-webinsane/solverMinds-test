import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRawDatasComponent } from './show-raw-datas.component';

describe('ShowRawDatasComponent', () => {
  let component: ShowRawDatasComponent;
  let fixture: ComponentFixture<ShowRawDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRawDatasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRawDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
