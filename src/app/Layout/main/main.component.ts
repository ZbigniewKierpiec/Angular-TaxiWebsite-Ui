import { Component } from '@angular/core';
import { SlideshowComponent } from './slideshow/slideshow.component';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SlideshowComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
