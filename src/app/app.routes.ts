import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { SpecialMenuComponent } from './pages/special-menu/special-menu.component';
import { SushiDetailsComponent } from './pages/sushi-details/sushi-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main-menu', component: MainMenuComponent,data: { animation: 'MainMenu' } },
  { path: 'main-menu/sushi/:id', component: SushiDetailsComponent },
  { path: 'special-menu', component: SpecialMenuComponent,data: { animation: 'SpecialMenu' } },
  { path: 'special-menu/sushi/:id', component: SushiDetailsComponent },
  { path: '**', redirectTo: '' }
];
