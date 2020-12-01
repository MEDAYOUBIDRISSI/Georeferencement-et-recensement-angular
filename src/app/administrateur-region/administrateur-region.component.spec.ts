import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurRegionComponent } from './administrateur-region.component';

describe('AdministrateurRegionComponent', () => {
  let component: AdministrateurRegionComponent;
  let fixture: ComponentFixture<AdministrateurRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrateurRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
