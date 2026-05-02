import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItemAddDialogComponent } from './shopping-list-item-add-dialog-component';

describe('ShoppingListItemAddDialogComponent', () => {
  let component: ShoppingListItemAddDialogComponent;
  let fixture: ComponentFixture<ShoppingListItemAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingListItemAddDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListItemAddDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
