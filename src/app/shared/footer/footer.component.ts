import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { HeaderFooterService } from '../header-footer.service';
import { TranslaterService } from '../../translater.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, HeaderComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  constructor(private router: Router, private translate: TranslaterService) {}
  http = inject(HttpClient);
  
  @ViewChild('confirmationMessage') confirmationMessage!: ElementRef;
  contactData = {
    name: '',
    email: '',
    message: '',
    privacyChecked: false,
  };

  mailTest = false;

  ngOnInit(): void {
    this.translate.applyLanguage();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.translate.applyLanguage(); 
      }
    });
  }

  post = {
    endPoint: 'https://emirhan-kilic.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text' as 'json',
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            console.log('Email sent successfully:', response);
            ngForm.resetForm();
            this.showConfirmationMessage();
          },
          error: (error) => {
            console.error('Error sending email:', error);
          },
          complete: () => console.info('Post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.showConfirmationMessage();
    }
  }

  showConfirmationMessage() {
    this.confirmationMessage.nativeElement.style.display = 'block';

    setTimeout(() => {
      this.confirmationMessage.nativeElement.style.display = 'none';
    }, 1500);
  }



  scrollUp() {
    this.translate.applyLanguage();
    window.scrollTo(0, 0)
  }
}
