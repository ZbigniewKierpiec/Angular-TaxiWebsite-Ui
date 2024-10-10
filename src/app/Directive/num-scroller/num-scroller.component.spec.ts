import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumScrollerComponent } from './num-scroller.component';

describe('NumScrollerComponent', () => {
  let component: NumScrollerComponent;
  let fixture: ComponentFixture<NumScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumScrollerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
