import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageDeComponent } from './main-page-de.component';

describe('MainPageDeComponent', () => {
  let component: MainPageDeComponent;
  let fixture: ComponentFixture<MainPageDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageDeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
