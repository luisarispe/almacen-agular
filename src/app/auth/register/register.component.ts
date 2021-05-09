import { Component, OnInit } from '@angular/core';

declare function functionInitialInit(): any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    functionInitialInit();
  }

}
