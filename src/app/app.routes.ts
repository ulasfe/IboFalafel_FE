import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './pages/main/main.component'; // Your default page
import { ErrorComponent } from './pages/error/error.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent, // The layout shell
    children: [
      // 1. THIS IS THE DEFAULT (Loads at http://localhost:4200/)
      { path: '', component: MainComponent }, 
      { path: 'login', component: AdminLoginComponent },
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      // 2. OTHER PAGES
      { 
        path: 'food', 
        loadComponent: () => import('./pages/food/food.component').then(m => m.FoodComponent) 
      },
      { 
        path: 'drinks', 
        loadComponent: () => import('./pages/drinks/drinks.component').then(m => m.DrinksComponent) 
      },
      { 
        path: 'contact', 
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) 
      },
      
      // 3. WILDCARD (If they type a wrong URL, go back to main)
    { path: '404', component: ErrorComponent },

      // 2. The Wildcard (Catches everything else)
      { path: '**', component: ErrorComponent }
    ]
  }
];