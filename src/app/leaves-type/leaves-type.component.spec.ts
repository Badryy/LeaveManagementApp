import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesTypeComponent } from './leaves-type.component';

describe('LeavesTypeComponent', () => {
  let component: LeavesTypeComponent;
  let fixture: ComponentFixture<LeavesTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeavesTypeComponent]
    });
    fixture = TestBed.createComponent(LeavesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
