import { Component } from '@angular/core';
import { HeaderComponent } from "../../Header/header/header.component";
import { RouterOutlet } from '@angular/router';
import { ToTopComponent } from "./to-top/to-top.component";
import { SocialAsideComponent } from './social-aside/social-aside.component';



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, ToTopComponent, SocialAsideComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
