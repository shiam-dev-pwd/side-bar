import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetMore1Component } from './test-det-more1.component';

describe('TestDetMore1Component', () => {
  let component: TestDetMore1Component;
  let fixture: ComponentFixture<TestDetMore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDetMore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDetMore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
