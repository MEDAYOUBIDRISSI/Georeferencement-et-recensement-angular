import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternauComponent } from './internau.component';

describe('InternauComponent', () => {
  let component: InternauComponent;
  let fixture: ComponentFixture<InternauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
