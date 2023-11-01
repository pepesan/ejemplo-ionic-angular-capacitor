import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {
  // valor almacenado
  savedValue: string | null = "";
  // clave a usar
  key = 'exampleKey';
  constructor() { }

  ngOnInit() {
    this.getSavedValue();
  }

  async getSavedValue() {
    const { value } = await Preferences.get({ key: this.key });
    this.savedValue = value;
    console.log('APP:FUN:Saved value:', this.savedValue);
  }

  async saveValueToPreferences() {
    await Preferences.set({
      key: this.key,
      value: 'exampleValue'
    });
    this.savedValue = 'exampleValue';
    console.log('Value saved to preferences.');
  }

  async clearPreferences() {
    await Preferences.remove({ key: this.key });
    this.savedValue = null;
    console.log('Preferences cleared.');
  }

}
