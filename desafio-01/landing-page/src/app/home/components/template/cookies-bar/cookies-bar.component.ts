import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies-bar',
  templateUrl: './cookies-bar.component.html',
  styleUrls: ['./cookies-bar.component.css', './cookies-bar.component.responsive.css']
})
export class CookiesBarComponent {
  cookieClick: boolean = false;

  cookieDesabilitado(): any {
    this.cookieClick = true;
  }
}
