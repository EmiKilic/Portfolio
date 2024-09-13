import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-follower',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mouse-follower.component.html',
  styleUrl: './mouse-follower.component.scss'
})
export class MouseFollowerComponent {
  mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX - 15;
    this.mouseY = event.clientY - 15;
  }
}
