import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailComponentComponent } from './list-detail-component.component';

describe('ListDetailComponentComponent', () => {
  let component: ListDetailComponentComponent;
  let fixture: ComponentFixture<ListDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetailComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
