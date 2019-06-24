import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from "./LoginComponent";

export const userRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent }
];
