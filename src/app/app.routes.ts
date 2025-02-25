import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { SpecialMenuComponent } from './pages/special-menu/special-menu.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'special-menu', component: SpecialMenuComponent },
  { path: '**', redirectTo: '' },
];
