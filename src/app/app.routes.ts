import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { LoginComponent } from './registro/login/login.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
];