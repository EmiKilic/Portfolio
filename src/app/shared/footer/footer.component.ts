import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { HeaderFooterService } from '../header-footer.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, HeaderComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private sharedService: HeaderFooterService) {}
  http = inject(HttpClient);
  
  @ViewChild('confirmationMessage') confirmationMessage!: ElementRef;
  contactData = {
    name: '',
    email: '',
    message: '',
    privacyChecked: false,
  };

  mailTest = false;

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

  showImp(): void {
    const imprintElement = document.getElementById('imprint') as HTMLDivElement;
    if (imprintElement) {
      imprintElement.style.display = 'block';
      document.body.style.overflowY = 'hidden';
    }
  }

  hideImp() {
    this.sharedService.hideImp();
  }

  showPol(): void {
    const policyElement = document.getElementById('policy') as HTMLDivElement;
    if (policyElement) {
      policyElement.style.display = 'block';
      document.body.style.overflowY = 'hidden';
    }
  }

  hidePol() {
    this.sharedService.hidePol();
  }
}
