import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateTicketComponent } from './admin-update-ticket.component';

describe('AdminUpdateTicketComponent', () => {
  let component: AdminUpdateTicketComponent;
  let fixture: ComponentFixture<AdminUpdateTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdateTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
