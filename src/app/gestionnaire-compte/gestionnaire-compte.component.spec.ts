import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireCompteComponent } from './gestionnaire-compte.component';

describe('GestionnaireCompteComponent', () => {
  let component: GestionnaireCompteComponent;
  let fixture: ComponentFixture<GestionnaireCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionnaireCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnaireCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
