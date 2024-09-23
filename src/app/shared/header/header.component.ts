import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderFooterService } from '../header-footer.service';
import { TranslaterService } from '../../translater.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  burger_menu = [
    'assets/header/burger-menu/burger_1.png',
    'assets/header/burger-menu/burger_2.png',
    'assets/header/burger-menu/burger_3.png',
    'assets/header/burger-menu/burger_4.png',
    'assets/header/burger-menu/burger_5.png',
    'assets/header/burger-menu/burger_6.png',
    'assets/header/burger-menu/burger_7.png',
    'assets/header/burger-menu/burger_8.png',
  ];

  currentImage: string = this.burger_menu[0];
  private isNavOpen = false;
  private interval: any;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef,
    private sharedService: HeaderFooterService,
    private translationService: TranslaterService
  ) {}

  ngOnInit(): void {
    this.translationService.applyLanguage();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.translationService.applyLanguage();
      }
    });
  }
  changeLanguage(language: string): void {
    this.translationService.setLanguage(language);
    this.translationService.applyLanguage();
  }
  toggleNav() {
    const overlay = this.el.nativeElement.querySelector('#myNav');
    this.isNavOpen = !this.isNavOpen;
  
    if (this.isNavOpen) {
      this.renderer.setStyle(overlay, 'display', 'flex');
      this.renderer.addClass(document.body, 'no-scroll');
      this.startOpenAnimation();
    } else {
      this.renderer.setStyle(overlay, 'display', 'none');
      this.renderer.removeClass(document.body, 'no-scroll');
      this.startCloseAnimation();
    }
  }
  scrollUp() {
    this.translationService.applyLanguage();
    window.scrollTo(0, 0)
  }
  
  startOpenAnimation() {
    let index = 0;
    this.clearAnimation();

    this.interval = setInterval(() => {
      if (index < 5) {
        this.currentImage = this.burger_menu[index];
        index++;
      } else {
        this.clearAnimation();
      }
    }, 1000 / 60);
  }

  startCloseAnimation() {
    let index = 4;
    this.clearAnimation();

    this.interval = setInterval(() => {
      if (index < this.burger_menu.length) {
        this.currentImage = this.burger_menu[index];
        index++;
      } else {
        this.clearAnimation();
        this.currentImage = this.burger_menu[0];
      }
    }, 1000 / 60);
  }

  clearAnimation() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  hideImp() {
    this.sharedService.hideImp();
  }

  hidePol() {
    this.sharedService.hidePol();
  }

}
