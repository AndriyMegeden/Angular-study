import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.page.html',
  styleUrls: ['./auth-page.page.scss'],
})
export class AuthPagePage implements OnInit {
  constructor() {}

  toggle: boolean = true
  switcher: boolean = true
  ngOnInit() {}
}
