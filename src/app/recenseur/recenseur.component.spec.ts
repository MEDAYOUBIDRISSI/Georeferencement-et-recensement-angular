import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenseurComponent } from './recenseur.component';

describe('RecenseurComponent', () => {
  let component: RecenseurComponent;
  let fixture: ComponentFixture<RecenseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecenseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecenseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
