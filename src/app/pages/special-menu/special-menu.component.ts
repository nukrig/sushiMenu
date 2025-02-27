import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { specialMenuSushiList } from '../../data/special-menu-data';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-special-menu',
  imports: [CommonModule, RouterModule, NavBarComponent, ProductCardComponent],
  templateUrl: './special-menu.component.html',
  styleUrl: './special-menu.component.scss'
})
export class SpecialMenuComponent {
  specialMenuSushiList = specialMenuSushiList
}
