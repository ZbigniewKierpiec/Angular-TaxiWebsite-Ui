import { Component } from '@angular/core';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PromiseComponent } from "./promise/promise.component";
import { CarsComponent } from "./cars/cars.component";
import { PlanComponent } from "./plan/plan.component";



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SlideshowComponent, PromiseComponent, CarsComponent, PlanComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
