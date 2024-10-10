import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-num-scroller',
  standalone: true,
  imports: [],
  templateUrl: './num-scroller.component.html',
  styleUrl: './num-scroller.component.scss'
})
export class NumScrollerComponent {

  targetNumber = 1000;  // Set the target number
  displayedNumber = 0;  // Start from 0
  duration = 4000;  // Animation duration in milliseconds
  hasScrolled = false;  // Prevent multiple triggers

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.observeVisibility();
  }

  scrollToNumber(target: number, duration: number) {
    const start = this.displayedNumber;
    const range = target - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    const startTime = Date.now();
    const endTime = startTime + duration;

    const run = () => {
      const now = Date.now();
      const remaining = Math.max((endTime - now) / duration, 0);
      const progress = 1 - remaining;
      this.displayedNumber = Math.floor(progress * range + start);
      if (now < endTime) {
        requestAnimationFrame(run);
      } else {
        this.displayedNumber = target;  // Ensure it ends at the target number
      }
    };

    run();
  }

  observeVisibility() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasScrolled) {
          this.hasScrolled = true; // Ensure it only runs once
          this.scrollToNumber(this.targetNumber, this.duration);
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the element is in view
    });

    // Observe the current element
    observer.observe(this.elementRef.nativeElement);
  }


}
