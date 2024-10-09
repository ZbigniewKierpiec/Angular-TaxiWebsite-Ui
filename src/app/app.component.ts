import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Model, Models } from './Models/Model';
import { NgFor } from '@angular/common';
import { LayoutComponent } from "./Layout/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'App';
  models = Models;

  Item(item:Model){
 console.log(item)
 this.title= item.name;
  }
}
