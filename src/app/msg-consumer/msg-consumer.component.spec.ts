import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MsgConsumerComponent} from './msg-consumer.component';

describe('MsgConsumerComponent', () => {
  let component: MsgConsumerComponent;
  let fixture: ComponentFixture<MsgConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MsgConsumerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
