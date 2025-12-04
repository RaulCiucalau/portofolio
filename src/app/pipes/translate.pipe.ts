import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {
    // Subscribe to language changes
    this.translationService.currentLang$.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  transform(key: string): string {
    return this.translationService.translate(key);
  }

}
