import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McservListComponent } from './mcserv-list.component';

describe('McservListComponent', () => {
  let component: McservListComponent;
  let fixture: ComponentFixture<McservListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McservListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McservListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
