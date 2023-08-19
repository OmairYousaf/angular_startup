import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasbeehComp1Component } from './tasbeeh-comp1.component';

describe('TasbeehComp1Component', () => {
  let component: TasbeehComp1Component;
  let fixture: ComponentFixture<TasbeehComp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasbeehComp1Component]
    });
    fixture = TestBed.createComponent(TasbeehComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
