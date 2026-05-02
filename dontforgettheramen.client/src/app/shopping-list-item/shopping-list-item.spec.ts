import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItem } from './shopping-list-item';

describe('ShoppingListItem', () => {
  let component: ShoppingListItem;
  let fixture: ComponentFixture<ShoppingListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
