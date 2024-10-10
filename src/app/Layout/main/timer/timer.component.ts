import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';

import { NumScrollDirective } from '../../../Directive/num-scroll.directive';
@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [ NumScrollDirective],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {



}
