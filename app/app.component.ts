import {Component} from 'angular2/core';
import {Hero} from './hero/hero';
import {ClickMeComponent} from './click-me/click-me.component';
import {KeyUpComponent_v1} from './keyup/keyup.components';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ClickMeComponent, KeyUpComponent_v1]
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
