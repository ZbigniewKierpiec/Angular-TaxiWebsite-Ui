import { Component, OnDestroy, OnInit } from '@angular/core';
import { StickyService } from '../../../Services/sticky.service';
import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-social-aside',
  standalone: true,
  imports: [NgClass],
  templateUrl: './social-aside.component.html',
  styleUrl: './social-aside.component.scss',
})
export class SocialAsideComponent implements OnInit, OnDestroy {
  isSticky: boolean = false;
  private subscription!: Subscription;
  constructor(private sticky: StickyService) {}

  ngOnInit(): void {
    this.subscription = this.sticky.isSticky$.subscribe((sticky) => {
      this.isSticky = sticky;
      console.log(this.isSticky);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
