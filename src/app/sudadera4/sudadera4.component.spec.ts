import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sudadera4Component } from './sudadera4.component';

describe('Sudadera4Component', () => {
  let component: Sudadera4Component;
  let fixture: ComponentFixture<Sudadera4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sudadera4Component]
    });
    fixture = TestBed.createComponent(Sudadera4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
