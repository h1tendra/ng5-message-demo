import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MsgPresenterComponent} from './msg-presenter.component';

describe('MsgPresenterComponent', () => {
  let component: MsgPresenterComponent;
  let fixture: ComponentFixture<MsgPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MsgPresenterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
