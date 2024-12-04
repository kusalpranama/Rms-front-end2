import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalManagementmentComponent } from './rental-managementment.component';

describe('RentalManagementmentComponent', () => {
  let component: RentalManagementmentComponent;
  let fixture: ComponentFixture<RentalManagementmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalManagementmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalManagementmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
