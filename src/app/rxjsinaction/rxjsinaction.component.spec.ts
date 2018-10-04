import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsinactionComponent } from './rxjsinaction.component';

describe('RxjsinactionComponent', () => {
  let component: RxjsinactionComponent;
  let fixture: ComponentFixture<RxjsinactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsinactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsinactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
