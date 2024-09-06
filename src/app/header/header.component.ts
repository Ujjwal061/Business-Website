import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // clickEvent(event) {
  //   // Haven't really got far
  //   var targetEle = event.srcElement.attributes.class;
  // }

  constructor(private router: Router, private renderer: Renderer2) {}

  onPackageSelect(event: Event): void {
    // const selectedValue = (event.target as HTMLSelectElement).value;

    let selectedvalue = (event.target as HTMLSelectElement).value
    console.log(selectedvalue)

    if (selectedvalue) {
      this.router.navigate(['/' + selectedvalue]);
    }
  }

  toggleNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      if (navbar.classList.contains('show')) {
        this.renderer.removeClass(navbar, 'show');
      } else {
        this.renderer.addClass(navbar, 'show');
      }
    }
  }
}
