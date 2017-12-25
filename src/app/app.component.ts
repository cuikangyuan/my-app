import { Component } from '@angular/core';

@Component({
  selector: 'my-router',
  template: `    
    <div>
      <nav>
        <a>Navigation: </a>
        <ul>
          <li><a [routerLink]="['home']">Home</a></li>
          <li><a [routerLink]="['about']">About</a></li>
          <li><a [routerLink]="['contact']">Contact Us</a></li>
        </ul>
      </nav>
      
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'app';
}
