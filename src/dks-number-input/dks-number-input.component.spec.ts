import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DksNumberInputComponent } from './dks-number-input.component';

describe('DksNumberInputComponent', () => {
  let component: DksNumberInputComponent;
  let fixture: ComponentFixture<DksNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DksNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DksNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
