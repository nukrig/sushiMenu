import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { specialMenuSushiList } from '../../data/special-menu-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink,CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() sushiList: any[] = [];

  constructor(private router: Router) {}

  goToDetails(sushiId: number) {
    this.router.navigate([this.router.url, 'sushi', sushiId]);
  }
}
