import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTiprComponent } from './form-tipr.component';

describe('FormTiprComponent', () => {
  let component: FormTiprComponent;
  let fixture: ComponentFixture<FormTiprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTiprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTiprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
