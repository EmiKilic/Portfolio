import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FirstPartComponent } from './first-part/first-part.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MouseFollowerComponent } from './shared/mouse-follower/mouse-follower.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FirstPartComponent,
    AboutMeComponent,
    MouseFollowerComponent,
    MySkillsComponent,
    PortfolioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
}
