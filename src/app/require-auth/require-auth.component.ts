import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-require-auth',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './require-auth.component.html',
  styleUrl: './require-auth.component.scss'
})
export class RequireAuthComponent {

}
