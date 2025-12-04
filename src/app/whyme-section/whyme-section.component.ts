import { Component } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-whyme-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './whyme-section.component.html',
  styleUrl: './whyme-section.component.scss'
})
export class WhymeSectionComponent {

}
