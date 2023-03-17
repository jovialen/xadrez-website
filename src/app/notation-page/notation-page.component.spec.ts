import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotationPageComponent } from './notation-page.component';

describe('NotationPageComponent', () => {
  let component: NotationPageComponent;
  let fixture: ComponentFixture<NotationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
