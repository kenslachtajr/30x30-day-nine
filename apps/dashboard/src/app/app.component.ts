import { Component } from '@angular/core';
import { AuthService } from '@phones/core-data';

@Component({
  selector: 'phones-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Phones MDV';

  links = [
    { path: '/phones', icon: 'work', title: 'Phones'}
  ]

  userIsAuthenticated$ = this.authService.isAuthenticated$;
  constructor(private authService: AuthService) {}
}
