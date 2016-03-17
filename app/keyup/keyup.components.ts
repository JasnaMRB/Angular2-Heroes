import {Component} from'angular2/core';

@Component({
  selector: 'keyup1',
  template: `<input (keyup)="onKey($event)">
    <p>{{values}}</p>`
})

export class KeyUpComponent_v1 {
  values ='';

  // without strong typing
  /*onKey(event:any) {
    this.values += event.target.value + ' | ';
  }*/
  // with strong typing
  onKey(event:KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}
