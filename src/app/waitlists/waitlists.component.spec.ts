import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistsComponent } from './waitlists.component';

describe('WaitlistsComponent', () => {
  let component: WaitlistsComponent;
  let fixture: ComponentFixture<WaitlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitlistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
