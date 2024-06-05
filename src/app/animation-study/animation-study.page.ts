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
  selector: 'app-animation-study',
  templateUrl: './animation-study.page.html',
  styleUrls: ['./animation-study.page.scss'],
  animations: [
    trigger('cube', [
      state('start', style({ width: '762px', height: '562px' })),
      state('end', style({ width: '500px', height: '415px', marginLeft: '60px',  opacity: '0.8' })),
      transition('* => *', animate(450)),
      state(
        'special',
        style({ width: '620px', height: '415px', opacity: '1' })
      ),
      transition('* => special', animate(950)),
      state(
        'nonspecial',
        style({  opacity: '0' })
      ),
      transition('nonspecial => *', animate(650)),
    ]),
  ],

  // animations: [
  //   trigger('box', [
  //     state('start', style({ background: 'blue' })),
  //     state('end', style({ background: 'red', transform: 'scale(1.2)' })),
  //     state(
  //       'special',
  //       style({
  //         background: 'orange',
  //         transform: 'scale(0.5)',
  //         borderRadius: '50%',
  //       })
  //     ),
  //     transition('end => start', animate('800ms ease-in-out')),
  //     transition('start => end', animate(450)),
  //     transition('start => special', animate(500)),
  //     transition('* <=> special', [
  //       group([
  //         query('h4', animate(1500, style({fontSize: '.5rem'}))),
  //         style({ background: 'green' }),
  //         animate('1s', style({ background: 'pink' })),
  //         animate(750),
  //       ]),
  //     ]),
  //     //void => *
  //     transition(':enter', [
  //       style({ opacity: '0' }),
  //       animate('850ms ease-out'),
  //     ]),
  //     //* => void
  //     transition(':leave', [
  //       style({ opacity: '1' }),
  //       //щоб одночасно запускати різні анімації
  //       group([
  //         animate(750, style({ opacity: 0, transform: 'scale(1.2)' })),
  //         animate(300, style({ color: 'black', fontWeight: 'bold' })),
  //       ]),
  //     ]),
  //   ]),
  // ],
})
export class AnimationStudyPage implements OnInit {

  // boxState = 'start';
  // visible = true;
  // animate() {
  //   this.boxState = this.boxState === 'start' ? 'end' : 'start';
  // }
  
 



  constructor() {}

  ngOnInit() {}
}
