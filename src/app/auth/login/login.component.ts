import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import pageSettings from '../../config/page-settings';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnDestroy {
  pageSettings: any;

  constructor(private router: Router, private renderer: Renderer2) {
    this.pageSettings = pageSettings;
    this.pageSettings.pageEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  login() {
    this.router.navigateByUrl("");
  }


}
