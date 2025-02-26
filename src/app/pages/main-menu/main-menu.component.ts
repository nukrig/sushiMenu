import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { mainSushiList } from '../../data/main-menu-data';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  constructor(private router: Router) {}

  sushiList = mainSushiList

  goToDetails(sushiId: number) {
    this.router.navigate([this.router.url, 'sushi', sushiId]);
  }
}
