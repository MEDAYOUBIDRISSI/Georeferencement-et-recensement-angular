import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecenseurComponent } from './create-recenseur.component';

describe('CreateRecenseurComponent', () => {
  let component: CreateRecenseurComponent;
  let fixture: ComponentFixture<CreateRecenseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRecenseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecenseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
