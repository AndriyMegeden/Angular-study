
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
  selector: 'app-dot-animation',
  templateUrl: './dot-animation.component.html',
  styleUrls: ['./dot-animation.component.scss'],
  animations: [
    trigger('dot', [
        state('yellowStart', style({ display: 'block'})),
        state('yellowEnd', style({ display: 'none'})),
        // transition('yellowEnd <=> yellowStart ',animate(1000) ),
        state('punktStart', style({ width: '10px', height: '10px',  borderRadius: '50%', backgroundColor: '#333194',  })),
        state('punktEnd', style({ width: '17px', height: '17px', borderRadius: '50%', backgroundColor: 'white' })),
        transition('punktStart <=> punktEnd',animate(300) ),
        state('punktEnd', style({ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'white' })),
        state('imgStart', style({display: 'none',  })),
        state('imgEnd', style({ position: 'absolute' })),
        transition('imgStart => imgEnd', animate(10000) )
      ]),
   
  ],
})
export class DotAnimationComponent  implements OnInit {


  imgState = 'imgStart';
  yellowState = 'yellowStart';
  punktState = 'punktStart';
  isAnimationInProgressPunkt = false;

  onMouseEnter1() {
    if (!this.isAnimationInProgressPunkt) {
      
      this.punktState = this.punktState === 'punktStart' ? 'punktEnd' : 'punktStart';
      this. yellowState = this.yellowState === 'yellowStart' ? 'yellowEnd' : 'yellowStart';
      this.imgState = this.imgState === 'imgStart' ? 'imgEnd' : 'imgStart';
    }
  }


  onMouseLeave1() {
    if (!this.isAnimationInProgressPunkt) {
      this.punktState = this.punktState === 'punktEnd' ? 'punktStart' : 'punktEnd';
      this. yellowState = this.yellowState === 'yellowEnd' ? 'yellowStart' : 'yellowEnd';
      this.imgState = this.imgState === 'imgEnd' ? 'imgStart' : 'imgEnd';
    }
  }

  onAnimationStart1() {
    this.isAnimationInProgressPunkt = true;
  }

  onAnimationEnd1() {
    this.isAnimationInProgressPunkt = false;
  }

  constructor() { }

  ngOnInit() {}

}
