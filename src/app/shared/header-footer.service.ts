import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderFooterService {

  constructor() { }

  hideImp(): void {
    const imprintElement = document.getElementById('imprint') as HTMLDivElement;
    if (imprintElement) {
      imprintElement.style.display = 'none';
      document.body.style.overflowY = 'auto';
  }
}  
hidePol(): void {
  const imprintElement = document.getElementById('policy') as HTMLDivElement;
  if (imprintElement) {
    imprintElement.style.display = 'none';
    document.body.style.overflowY = 'auto';
}
}
}
