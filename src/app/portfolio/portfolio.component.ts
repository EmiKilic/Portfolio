import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  rotate(event: MouseEvent) {
    const image = (event.currentTarget as HTMLElement).querySelector('.right-border-image');
    if (image) {
      image.classList.add('rotate-animation');
    }
  }
  
}
