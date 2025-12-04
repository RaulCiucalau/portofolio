import { Component } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-references-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './references-section.component.html',
  styleUrl: './references-section.component.scss'
})
export class ReferencesSectionComponent {

}
