import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = true;

  post = {
    endPoint: 'https://emirhan-kilic.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
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
    const imprintElement = document.getElementById('policy') as HTMLDivElement;
    if (imprintElement) {
      imprintElement.style.display = 'block';
      document.body.style.overflowY = 'hidden';
    }
  }

  hidePol() {
    this.sharedService.hidePol();
  }
}
