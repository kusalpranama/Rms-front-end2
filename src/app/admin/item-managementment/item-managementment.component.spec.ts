import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManagementmentComponent } from './item-managementment.component';

describe('ItemManagementmentComponent', () => {
  let component: ItemManagementmentComponent;
  let fixture: ComponentFixture<ItemManagementmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemManagementmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemManagementmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
