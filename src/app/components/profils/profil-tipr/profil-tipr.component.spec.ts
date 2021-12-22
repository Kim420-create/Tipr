import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilTiprComponent } from './profil-tipr.component';

describe('ProfilTiprComponent', () => {
  let component: ProfilTiprComponent;
  let fixture: ComponentFixture<ProfilTiprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilTiprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilTiprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
