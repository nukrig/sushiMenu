import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { mainSushiList } from '../../data/main-menu-data';
import { specialMenuSushiList } from '../../data/special-menu-data';

@Component({
  selector: 'app-sushi-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sushi-details.component.html',
  styleUrls: ['./sushi-details.component.scss']
})
export class SushiDetailsComponent {
  sushi: any;
  previousRoute: string = '/main-menu';

  sushiList = mainSushiList
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      const sushiId = Number(params.get('id'));
      this.sushi = this.sushiList.find(s => s.id === sushiId);
      this.route.paramMap.subscribe(params => {
        const sushiId = Number(params.get('id'));
        const currentUrl = this.router.url;
        
        if (currentUrl.includes('special-menu')) {
          this.sushi = specialMenuSushiList.find(s => s.id === sushiId);
          this.previousRoute = '/special-menu';
        } else {
          this.sushi = mainSushiList.find(s => s.id === sushiId);
          this.previousRoute = '/main-menu';
        }
      });

      const parentRoute = this.route.parent?.snapshot.url.map(segment => segment.path).join('/');
      if (parentRoute) {
        this.previousRoute = `/${parentRoute}`;
      }
    });
  }
  

  goBack() {
    this.router.navigate([this.previousRoute]);
  }
}
