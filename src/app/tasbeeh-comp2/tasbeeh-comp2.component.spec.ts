import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasbeehComp2Component } from './tasbeeh-comp2.component';

describe('TasbeehComp2Component', () => {
  let component: TasbeehComp2Component;
  let fixture: ComponentFixture<TasbeehComp2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasbeehComp2Component]
    });
    fixture = TestBed.createComponent(TasbeehComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
