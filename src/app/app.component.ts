import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd, RouterLink } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FirstPartComponent } from './first-part/first-part.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MouseFollowerComponent } from './shared/mouse-follower/mouse-follower.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PolicComponent } from './polic/polic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    FirstPartComponent,
    AboutMeComponent,
    MouseFollowerComponent,
    MySkillsComponent,
    PortfolioComponent, 
    ImprintComponent,
    PolicComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'Portfolio';
  displayOnlyHeaderFooter: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.displayOnlyHeaderFooter = (this.router.url === '/imprint' || this.router.url === '/polic');
      }
    });
  }
}
