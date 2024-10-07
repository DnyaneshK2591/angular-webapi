import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockableIoComponent } from './mockable-io.component';

describe('MockableIoComponent', () => {
  let component: MockableIoComponent;
  let fixture: ComponentFixture<MockableIoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockableIoComponent],
    });
    fixture = TestBed.createComponent(MockableIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
