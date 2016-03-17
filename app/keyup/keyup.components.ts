import {Component} from'angular2/core';

/**
* Listens for every single keystroke and outputs it.
**/
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

/**
* Listens for every single keystroke and outputs it.
**/
@Component({
  selector: 'keyup2',
  template: `<input #box (keyup)="onKey(box.value)">
  <p>{{values}}</p>`
})

export class KeyUpComponent_v2 {
  values = '';
  onKey(value:string) {
    this.values += value + ' | ';
  }
}

/**
* Only listens for when user presses Enter and then outputs stuff.
**/
@Component ({
  selector: 'keyup3',
  template: `
    <input #box (keyup.enter)="values=box.value">
    <p>{{values}}</p>
    `
})

export class KeyUpComponent_v3 {}

/**
* Listens for when user moves focus away from text box OR when Enter.
**/

@Component({
  selector: 'keyup4',
  template: `
    <input #box
    (keyup.enter)="values=box.value"
    (blur)="values=box.value">

    <p>{{values}}</p>`
})

export class KeyUpComponent_v4 {}
