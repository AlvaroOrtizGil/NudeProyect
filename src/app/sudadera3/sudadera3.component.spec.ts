import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sudadera3Component } from './sudadera3.component';

describe('Sudadera3Component', () => {
  let component: Sudadera3Component;
  let fixture: ComponentFixture<Sudadera3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sudadera3Component]
    });
    fixture = TestBed.createComponent(Sudadera3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
