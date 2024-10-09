import { NgClass, NgStyle } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  QueryList,
  Renderer2,
  viewChild,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { StickyService } from '../../Services/sticky.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle, NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('navBar', { static: false }) navBar!: ElementRef;
  @ViewChildren('listItem') listItems!: QueryList<ElementRef>; // Query for all li items

  @ViewChild('segmentedControl', { static: true })
  segmentedControl?: ElementRef; // Query for the slide element
  markerWidth: number = 0;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private sticky: StickyService
  ) {}

  selectLi(index: number): void {
    // Ensure the list items are available
    const listArray = this.listItems.toArray();
    if (!listArray[index]) {
      console.error(`List item at index ${index} not found`);
      return;
    }

    const selectedTabElement = listArray[index].nativeElement;

    console.log('Selected Tab Element:', selectedTabElement); // Debug: Log selected tab

    // Calculate the position and width of the tab marker
    const markerPosition = selectedTabElement.offsetLeft;
    const markWidth = selectedTabElement.offsetWidth;

    console.log('Marker Position:', markerPosition); // Debug: Log marker position
    console.log('Marker Width:', markWidth); // Debug: Log marker width

    // Update the marker width
    this.markerWidth = markWidth;

    // Move the marker ('.slide') using Renderer2
    if (this.segmentedControl) {
      this.renderer.setStyle(
        this.segmentedControl.nativeElement,
        'transform',
        `translateX(${markerPosition}px)`
      );
    } else {
      console.error('Segmented control element not found.');
    }
  }
  isSticky: boolean = false;

  // Listen for the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkNavPosition();
  }

  // checkNavPosition() {
  //   console.log('navBar:', this.navBar); // Log the navBar
  //   if (this.navBar && this.navBar.nativeElement) {
  //     const navTop = this.navBar.nativeElement.getBoundingClientRect().top;
  //     this.isSticky = navTop <= 0;
  //     console.log(this.isSticky);
  //   } else {
  //     console.error('navBar is not defined or nativeElement is not available.');
  //   }
  // }

  checkNavPosition(): void {
    const topPosition = this.navBar.nativeElement.offsetTop;
    console.log('Top position:', topPosition);

    this.isSticky = topPosition > 50;
    this.sticky.setSticky(this.isSticky);
  }

  ngAfterViewInit(): void {
    // Ensure the elements are ready
    console.log('List Items:', this.listItems); // Debug: Check if list items are populated
    console.log('Segmented Control:', this.segmentedControl); // Debug: Ensure segmented control is referenced correctly
    this.checkNavPosition();
  }
}
