import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { GoogleSsoDirective } from 'app/google-sso.directive';
import { AppModule } from 'app/app.module';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ RouterLink, CommonModule, AppModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  // constructor(public angularFireAuth: AngularFireAuth) {}
  // logOut() {
  //   this.angularFireAuth.signOut();
  // }
}
