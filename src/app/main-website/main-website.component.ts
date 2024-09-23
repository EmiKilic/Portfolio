import { Component, OnInit } from '@angular/core';
import { FirstPartComponent } from '../first-part/first-part.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-website',
  standalone: true,
  imports: [FirstPartComponent, PortfolioComponent, MySkillsComponent, AboutMeComponent, CommonModule],
  templateUrl: './main-website.component.html',
  styleUrls: ['./main-website.component.scss']
})
export class MainWebsiteComponent implements OnInit {
  title = 'Portfolio';
  displayOnlyHeaderFooter: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to router events to handle route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Navigated to:', this.router.url);

        // Show content on the root page or fragment navigation
        this.displayOnlyHeaderFooter = !(this.router.url === '/' || this.router.url === '' || this.router.url.startsWith('/#'));
      }
    });

    // Subscribe to the fragment changes (do this once)
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        // Use setTimeout to ensure the content is rendered before scrolling
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);  // Delay to allow rendering before scrolling
      }
    });
  }
}
