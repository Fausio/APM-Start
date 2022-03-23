import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPathComponent } from './not-found-path.component';

describe('NotFoundPathComponent', () => {
  let component: NotFoundPathComponent;
  let fixture: ComponentFixture<NotFoundPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
