import { Component } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-myskills-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './myskills-section.component.html',
  styleUrl: './myskills-section.component.scss'
})
export class MyskillsSectionComponent {

}
