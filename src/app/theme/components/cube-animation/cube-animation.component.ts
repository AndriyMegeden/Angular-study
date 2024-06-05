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
  selector: 'app-cube-animation',
  templateUrl: './cube-animation.component.html',
  styleUrls: ['./cube-animation.component.scss'],
  animations: [
    trigger('cube', [
      state('start', style({ width: '662px', height: '462px' })),
      state('end', style({ width: '500px', height: '415px', marginLeft: '10px',  opacity: '0.8' })),
      transition('* => *', animate(450)),
      // state(
      //   'special',
      //   style({ width: '620px', height: '320px', opacity: '1' })
      // ),
      // transition('* => special', animate(950)),
      // state(
      //   'nonspecial',
      //   style({  opacity: '0' })
      // ),
      // transition('nonspecial => *', animate(650)),
    ]),
  ],
})
export class CubeAnimationComponent  implements OnInit {

  isAnimationInProgress = false;
  isHovered = false;

  cubeState = 'start';
  appsState = 'nonspecial';
  onMouseEnter() {
    if (!this.isAnimationInProgress) {
      this.isHovered = true;
      this.cubeState = this.cubeState === 'start' ? 'end' : 'end';
      this.appsState = this.appsState === 'special' ? 'nonspecial' : 'special';
      
    }
  }

  onMouseLeave() {
    if (!this.isAnimationInProgress) {
      this.isHovered = false;
      this.cubeState = this.cubeState === 'end' ? 'start' : 'end';
      this.appsState = this.appsState === 'nonspecial' ? 'special' : 'nonspecial';
     
    }
  }

  onAnimationStart() {
    this.isAnimationInProgress = true;
  }
  onAnimationEnd() {
    this.isAnimationInProgress = false;
  }

  

  constructor() { }

  ngOnInit() {}

}
