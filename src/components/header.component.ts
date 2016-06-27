import { Component } from '@angular/core';
import { RtbmSearchComponent } from './search.component';

@Component({
  selector: 'rtbm-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.less')],
  directives: [RtbmSearchComponent],
})
export class RtbmHeaderComponent {
}
