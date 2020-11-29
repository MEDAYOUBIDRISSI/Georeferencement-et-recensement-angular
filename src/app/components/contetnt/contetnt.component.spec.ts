import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContetntComponent } from './contetnt.component';

describe('ContetntComponent', () => {
  let component: ContetntComponent;
  let fixture: ComponentFixture<ContetntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContetntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContetntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
