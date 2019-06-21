import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor() {}
  event: any;
  ngOnInit() {}
  login(formValues) {
    console.log(formValues);
  }
}
