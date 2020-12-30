import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminRegionalComponent } from './create-admin-regional.component';

describe('CreateAdminRegionalComponent', () => {
  let component: CreateAdminRegionalComponent;
  let fixture: ComponentFixture<CreateAdminRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdminRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdminRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
