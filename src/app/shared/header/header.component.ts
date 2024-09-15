import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  burger_menu = [
    "assets/header/burger-menu/burger_1.png",
    "assets/header/burger-menu/burger_2.png",
    "assets/header/burger-menu/burger_3.png",
    "assets/header/burger-menu/burger_4.png",
    "assets/header/burger-menu/burger_5.png",
    "assets/header/burger-menu/burger_6.png",
    "assets/header/burger-menu/burger_7.png",
    "assets/header/burger-menu/burger_8.png",
  ]

  private isNavOpen = false;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleNav() {
    const overlay = this.el.nativeElement.querySelector('#myNav');
    this.isNavOpen = !this.isNavOpen;

    if (this.isNavOpen) {
      this.renderer.setStyle(overlay, 'display', 'flex');
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.setStyle(overlay, 'display', 'none');
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
}
