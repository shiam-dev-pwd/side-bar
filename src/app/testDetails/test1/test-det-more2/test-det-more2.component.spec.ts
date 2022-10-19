import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetMore2Component } from './test-det-more2.component';

describe('TestDetMore2Component', () => {
  let component: TestDetMore2Component;
  let fixture: ComponentFixture<TestDetMore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDetMore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDetMore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
