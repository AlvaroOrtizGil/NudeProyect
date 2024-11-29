import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sudadera1Component } from './sudadera1.component';

describe('Sudadera1Component', () => {
  let component: Sudadera1Component;
  let fixture: ComponentFixture<Sudadera1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sudadera1Component]
    });
    fixture = TestBed.createComponent(Sudadera1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
