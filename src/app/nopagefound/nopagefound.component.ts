import { Component, OnDestroy } from '@angular/core';

import pageSettings from '../config/page-settings';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styles: [
  ]
})
export class NopagefoundComponent implements OnDestroy {

  pageSettings: any;

  constructor() {
    this.pageSettings = pageSettings;
    this.pageSettings.pageEmpty = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
  }

}
