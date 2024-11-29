import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sudadera2Component } from './sudadera2.component';

describe('Sudadera2Component', () => {
  let component: Sudadera2Component;
  let fixture: ComponentFixture<Sudadera2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sudadera2Component]
    });
    fixture = TestBed.createComponent(Sudadera2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
