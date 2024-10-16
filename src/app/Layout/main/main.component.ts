import { Component } from '@angular/core';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PromiseComponent } from "./promise/promise.component";
import { CarsComponent } from "./cars/cars.component";
import { PlanComponent } from "./plan/plan.component";
import { TimerComponent } from "./timer/timer.component";



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SlideshowComponent, PromiseComponent, CarsComponent, PlanComponent, TimerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
