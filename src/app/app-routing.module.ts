import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register.component').then((m) => m.RegisterComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin-dashboard/admin-dashboard.component').then((m) => m.AdminDashboardComponent),
    canActivate: [AuthGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'vendor',
    loadComponent: () => import('./components/vendor-dashboard/vendor-dashboard.component').then((m) => m.VendorDashboardComponent),
    canActivate: [AuthGuard],
    data: { roles: ['vendor'] }
  },
  {
    path: 'cart',
    loadComponent: () => import('./components/cart/cart.component').then((m) => m.CartComponent)
  }
];
