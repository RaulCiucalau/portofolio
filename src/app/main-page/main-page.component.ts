import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { WhymeSectionComponent } from '../whyme-section/whyme-section.component';
import { MyskillsSectionComponent } from '../myskills-section/myskills-section.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';
import { ReferencesSectionComponent } from '../references-section/references-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    WhymeSectionComponent,
    MyskillsSectionComponent,
    ProjectsSectionComponent,
    ReferencesSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
