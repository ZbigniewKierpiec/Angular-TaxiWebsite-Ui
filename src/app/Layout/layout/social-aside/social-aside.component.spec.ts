import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAsideComponent } from './social-aside.component';

describe('SocialAsideComponent', () => {
  let component: SocialAsideComponent;
  let fixture: ComponentFixture<SocialAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialAsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
