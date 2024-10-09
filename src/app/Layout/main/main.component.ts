import { Component } from '@angular/core';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PromiseComponent } from "./promise/promise.component";



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SlideshowComponent, PromiseComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
