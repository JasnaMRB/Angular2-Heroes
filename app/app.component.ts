import {Component} from 'angular2/core';
import {Hero} from './hero/hero';
import {ClickMeComponent} from './click-me/click-me.component';
import {KeyUpComponent_v2} from './keyup/keyup.components';
import {KeyUpComponent_v3} from './keyup/keyup.components';
import {KeyUpComponent_v4} from './keyup/keyup.components';
import {LittleTourComponent} from './little-tour/little-tour.component';
import {LoopbackComponent} from './loop-back/loop-back.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ClickMeComponent, KeyUpComponent_v3,
      KeyUpComponent_v4, KeyUpComponent_v2, LoopbackComponent, LittleTourComponent]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Boo'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
}
