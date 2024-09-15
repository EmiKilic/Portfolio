import { Component, ElementRef, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  openNav() {
    console.log('AAAA');
    
    const overlay = this.el.nativeElement.querySelector('#overlay');
    this.renderer.setStyle(overlay, 'display', 'block');
  }

  closeNav() {
    const overlay = this.el.nativeElement.querySelector('#myNav');
    this.renderer.setStyle(overlay, 'display', 'none');
  }
}
