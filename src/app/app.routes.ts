import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { authGuard } from './auth.guard';
import { RequireAuthComponent } from './require-auth/require-auth.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [

    {
        path: 'require-auth',
        component: RequireAuthComponent,
        canActivate: [authGuard],
      },
    
      { path: "", component: LandingComponent },
      { path: "todolist", component: TodolistComponent },
    { path: "signin", component: SigninComponent}

];


