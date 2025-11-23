import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprojectsSectionComponent } from './myprojects-section.component';

describe('MyprojectsSectionComponent', () => {
  let component: MyprojectsSectionComponent;
  let fixture: ComponentFixture<MyprojectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyprojectsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyprojectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
