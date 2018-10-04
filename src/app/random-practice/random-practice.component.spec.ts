import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPracticeComponent } from './random-practice.component';

describe('RandomPracticeComponent', () => {
  let component: RandomPracticeComponent;
  let fixture: ComponentFixture<RandomPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
