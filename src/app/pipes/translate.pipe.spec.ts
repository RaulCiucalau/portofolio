import { TranslatePipe } from './translate.pipe';
import { ChangeDetectorRef } from '@angular/core';
import { TranslationService } from '../services/translation.service';

describe('TranslatePipe', () => {
  it('create an instance', () => {
    const mockTranslationService = jasmine.createSpyObj('TranslationService', [], { currentLang$: { subscribe: jasmine.createSpy() } });
    const mockChangeDetectorRef = jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']);
    const pipe = new TranslatePipe(mockTranslationService, mockChangeDetectorRef);
    expect(pipe).toBeTruthy();
  });
});
