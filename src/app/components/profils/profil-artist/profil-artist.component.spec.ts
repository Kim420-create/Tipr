import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilArtistComponent } from './profil-artist.component';

describe('ProfilArtistComponent', () => {
  let component: ProfilArtistComponent;
  let fixture: ComponentFixture<ProfilArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
