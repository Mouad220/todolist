import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { TodolistComponent } from "./todolist/todolist.component";
import { SigninComponent } from "./signin/signin.component";
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodolistComponent, SigninComponent,RouterLink, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todoapp';
  
}