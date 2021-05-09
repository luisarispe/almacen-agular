import { Component, OnInit } from '@angular/core';
import pageSettings from './config/page-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageSettings: any;
  pageHasScroll: any;
  ngOnInit(): void {
    this.pageSettings = pageSettings;
  }
  title = 'almacenApp';
}
