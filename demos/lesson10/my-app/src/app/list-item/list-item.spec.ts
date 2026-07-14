import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItem } from './list-item';

describe('ListItem', () => {
  let component: ListItem;
  let fixture: ComponentFixture<ListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
