import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeritageComponent } from './add-heritage.component';

describe('AddHeritageComponent', () => {
  let component: AddHeritageComponent;
  let fixture: ComponentFixture<AddHeritageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHeritageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeritageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
