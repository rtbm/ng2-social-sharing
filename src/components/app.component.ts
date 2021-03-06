import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RtbmListComponent } from './list.component';
import { ArticlesActions } from '../actions/articles.actions';
import { IAppState } from '../reducers/index';
import { NgRedux } from 'ng2-redux';
import rootReducer from '../reducers';
import { middlewares } from '../state/state.middlewares';
import { Observable } from 'rxjs/Rx';
import { RtbmSubmissionComponent } from './submission.component';
import { ArticleFormActions } from '../actions/articleForm.actions';
import { RtbmSearchComponent } from './search.component';
import { RtbmHeaderComponent } from './header.component';
import { RtbmWrapperComponent } from './wrapper.component';
import { RtbmLogoComponent } from './logo.component';
import { RtbmSpinnerComponent } from './spinner.component';

@Component({
  selector: 'rtbm-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.less')],
  pipes: [AsyncPipe],
  directives: [RtbmListComponent, RtbmSearchComponent, RtbmSubmissionComponent, RtbmHeaderComponent,
    RtbmWrapperComponent, RtbmLogoComponent, RtbmSpinnerComponent],
  encapsulation: ViewEncapsulation.None,
})
export class RtbmAppComponent {
  private isPending$: Observable<boolean>;
  private list$: Observable<any>;
  private isModalFormVisible$: Observable<boolean>;

  constructor(
    private articlesActions: ArticlesActions,
    private articleFormActions: ArticleFormActions,
    private ngRedux: NgRedux<IAppState>
  ) {
    ngRedux.configureStore(rootReducer, {}, middlewares);
    articlesActions.fetch();

    this.isPending$ = ngRedux.select(state => state.articles.get('isPending'));
    this.list$ = ngRedux.select(state => state.articles.get('list')).map(list => list.toJS());
    this.isModalFormVisible$ = ngRedux.select(state => state.articleForm.get('isModalVisible'));
  }

  open(url) {
    window.open(url);
  }
}
