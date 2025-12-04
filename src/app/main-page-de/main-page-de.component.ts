import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { WhymeSectionComponent } from '../whyme-section/whyme-section.component';
import { MyskillsSectionComponent } from '../myskills-section/myskills-section.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';
import { ReferencesSectionComponent } from '../references-section/references-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-main-page-de',
  standalone: true,
  imports: [
    HeroSectionComponent,
    WhymeSectionComponent,
    MyskillsSectionComponent,
    ProjectsSectionComponent,
    ReferencesSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './main-page-de.component.html',
  styleUrl: './main-page-de.component.scss'
})
export class MainPageDeComponent implements OnInit {

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.setLanguage('de');
  }
}
