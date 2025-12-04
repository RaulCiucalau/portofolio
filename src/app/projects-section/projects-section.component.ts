import { Component } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {

}
