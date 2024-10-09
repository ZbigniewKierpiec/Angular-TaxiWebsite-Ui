import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportTransferComponent } from './airport-transfer.component';

describe('AirportTransferComponent', () => {
  let component: AirportTransferComponent;
  let fixture: ComponentFixture<AirportTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirportTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
