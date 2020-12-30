import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenseurListComponent } from './recenseur-list.component';

describe('RecenseurListComponent', () => {
  let component: RecenseurListComponent;
  let fixture: ComponentFixture<RecenseurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecenseurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecenseurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
