import { ServerService } from '../services/server.service';
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';

@Injectable()
export class ArticleFormActions {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private serverService: ServerService
  ) {
  }

  showForm() {
    this.ngRedux.dispatch({
      type: 'ARTICLE_FORM_SHOW',
    });
  }

  hideForm() {
    this.ngRedux.dispatch({
      type: 'ARTICLE_FORM_HIDE',
    });
  }

  save(body) {
    this.ngRedux.dispatch({
      type: 'ARTICLE_FORM_PENDING',
    });

    return this.serverService.post('/api/articles', body)
      .subscribe(
        items => this.ngRedux.dispatch({
          type: 'ARTICLE_FORM_SUCCESS',
          payload: { items },
        }),
        err => this.ngRedux.dispatch({
          type: 'ARTICLE_FORM_ERROR',
          payload: { err },
        })
      );
  }
}
