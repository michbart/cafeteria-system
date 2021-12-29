import { Component, Inject, LOCALE_ID } from '@angular/core';
import { getCurrentLocale } from '../get-locale';

@Component({
  selector: 'cafeteria-locale-selector',
  templateUrl: './locale-selector.component.html',
  styleUrls: [],
})
export class LocaleSelectorComponent {

  public selectedLocale: string;
  public locales: string[] = ['en', 'cs'];

  constructor(@Inject(LOCALE_ID) private localeId: string) {
    this.selectedLocale = getCurrentLocale(this.localeId);
  }

  changeLocale(localeId: string): void {
    this.selectedLocale = this.locales.find(locale => locale === localeId);
    window.location.href = `${window.location.origin}/${this.selectedLocale}/${window.location.hash}`;
  }

}
