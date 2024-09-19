import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderFooterService } from '../shared/header-footer.service';

@Component({
  selector: 'app-polic',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './polic.component.html',
  styleUrl: './polic.component.scss'
})
export class PolicComponent {
  constructor(private sharedService: HeaderFooterService) {}
  goBack() {
    history.back();
  }
}
