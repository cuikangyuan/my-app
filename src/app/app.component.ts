import { Component } from '@angular/core';

@Component({
  selector: 'my-router',
  template: `    
    <div>
      <nav>
        <a>Navigation: </a>
        <ul>
          <li><a [routerLink]="['/home']">Home</a></li>
          <li><a [routerLink]="['/about']">About</a></li>
          <li><a [routerLink]="['/contact']">Contact Us</a></li>
          <li><a [routerLink]="['/protected']">Protected</a></li>
        </ul>
      </nav>
      
     <login-component></login-component>
      
      <hr>
      
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'app';
}
