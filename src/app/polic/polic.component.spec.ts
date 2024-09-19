import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicComponent } from './polic.component';

describe('PolicComponent', () => {
  let component: PolicComponent;
  let fixture: ComponentFixture<PolicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
