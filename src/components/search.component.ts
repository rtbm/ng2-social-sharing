import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rtbm-search',
  template: require('./search.component.html'),
  styles: [require('./search.component.less')],
})
export class RtbmSearchComponent {
  private query: string = '';
  @Output() private onKeyup = new EventEmitter();

  constructor() {
  }

  handleOnKeyup() {
    this.onKeyup.emit(this.query);
  }
}
