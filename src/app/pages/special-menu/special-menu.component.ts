import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { specialMenuSushiList } from '../../data/special-menu-data';

@Component({
  selector: 'app-special-menu',
  imports: [CommonModule,RouterModule],
  templateUrl: './special-menu.component.html',
  styleUrl: './special-menu.component.scss'
})
export class SpecialMenuComponent {
  constructor(private router: Router) {}

  sushiList = specialMenuSushiList

  goToDetails(sushiId: number) {
    this.router.navigate([this.router.url, 'sushi', sushiId]);
  }
}
