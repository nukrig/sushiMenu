import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterLink, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}

