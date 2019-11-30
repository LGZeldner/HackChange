import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McservViewComponent } from './mcserv-view.component';

describe('McservViewComponent', () => {
  let component: McservViewComponent;
  let fixture: ComponentFixture<McservViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McservViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McservViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
