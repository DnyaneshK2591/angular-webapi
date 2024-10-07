import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalJsonComponent } from './local-json.component';

describe('LocalJsonComponent', () => {
  let component: LocalJsonComponent;
  let fixture: ComponentFixture<LocalJsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalJsonComponent],
    });
    fixture = TestBed.createComponent(LocalJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
