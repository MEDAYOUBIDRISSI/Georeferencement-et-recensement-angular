import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegionalComponent } from './admin-regional.component';

describe('AdminRegionalComponent', () => {
  let component: AdminRegionalComponent;
  let fixture: ComponentFixture<AdminRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
