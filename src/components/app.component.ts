import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RtbmListComponent } from './list.component';
import { RtbmSearchComponent } from './search.component';
import { ArticlesActions } from '../actions/articles.actions';
import { IAppState } from '../reducers/index';
import { NgRedux } from 'ng2-redux';
import rootReducer from '../reducers';
import { middlewares } from '../state/state.middlewares';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'rtbm-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.less')],
  pipes: [AsyncPipe],
  directives: [RtbmListComponent, RtbmSearchComponent],
  encapsulation: ViewEncapsulation.None,
})

export class RtbmAppComponent {
  private isPending$: Observable<boolean>;
  private list$: Observable<any>;

  constructor(private articlesActions: ArticlesActions, ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {}, middlewares);
    articlesActions.fetch();

    this.isPending$ = ngRedux.select(state => state.articles.get('isPending'));
    this.list$ = ngRedux.select(state => state.articles.get('list')).map(list => list.toJS());
  }

  open(url) {
    window.open(url);
  }
}
