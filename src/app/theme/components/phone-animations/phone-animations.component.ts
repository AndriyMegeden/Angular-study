import {
  animate,
  state,
  style,
  transition,
  trigger,
  group,
  query,
  animateChild,
} from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-animations',
  templateUrl: './phone-animations.component.html',
  styleUrls: ['./phone-animations.component.scss'],
  animations: [
    trigger('dot', [
      state(
        'buttonStart',
        style({
          margin: '20px',
          backgroundColor: 'yellow',
          borderRadius: '100px',
          width: '250px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })
      ),
      state(
        'buttonEnd',
        style({
          position: 'absolute',
          width: '350px',
        })
      ),
      transition('buttonStart <=> buttonEnd', animate(300)),

      state('textStart', style({ fontWeight: '400' })),
      state('textEnd', style({ fontWeight: '800' })),
      transition('textStart <=> textEnd', animate(300)),

      state('numberStart', style({})),
      state(
        'numberEnd',
        style({
          backgroundColor: 'rgb(85, 46, 193)',
          marginLeft: '322px',
          width: '44px',
          height: '44px',
        })
      ),
      transition('numberStart <=> numberEnd', animate(300)),
    ]),
  ],
})
export class PhoneAnimationsComponent implements OnInit {

  

  textState = 'textStart';
  buttonState = 'buttonStart';
  numberState = 'numberStart';
  isAnimationInProgressPunkt = false;

  onMouseEnter1() {
    if (!this.isAnimationInProgressPunkt) {
      this.buttonState =
        this.buttonState === 'buttonStart' ? 'buttonEnd' : 'buttonStart';
      this.numberState =
        this.numberState === 'numberStart' ? 'numberEnd' : 'numberStart';
      this.textState = this.textState === 'textStart' ? 'textEnd' : 'textStart';
    }
  }

  onMouseLeave1() {
    if (!this.isAnimationInProgressPunkt) {
      this.buttonState =
        this.buttonState === 'buttonEnd' ? 'buttonStart' : 'buttonEnd';
      this.numberState =
        this.numberState === 'numberEnd' ? 'numberStart' : 'numberEnd';
      this.textState = this.textState === 'textEnd' ? 'textStart' : 'textEnd';
    }
  }

  onAnimationStart1() {
    this.isAnimationInProgressPunkt = true;
  }

  onAnimationEnd1() {
    this.isAnimationInProgressPunkt = false;
  }

  constructor() {}

  ngOnInit() {}
}
