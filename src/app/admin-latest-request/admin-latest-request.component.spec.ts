import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLatestRequestComponent } from './admin-latest-request.component';

describe('AdminLatestRequestComponent', () => {
  let component: AdminLatestRequestComponent;
  let fixture: ComponentFixture<AdminLatestRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLatestRequestComponent]
    });
    fixture = TestBed.createComponent(AdminLatestRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
