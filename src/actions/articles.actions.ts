import { ServerService } from '../services/server.service';
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';

@Injectable()
export class ArticlesActions {
  constructor(private serverService: ServerService,
              private ngRedux: NgRedux<IAppState>) {
  }

  fetch() {
    this.ngRedux.dispatch({
      type: 'ARTICLES_FETCH_PENDING',
    });

    return this.serverService.get('/api/articles')
      .subscribe(
        items => this.ngRedux.dispatch({
          type: 'ARTICLES_FETCH_SUCCESS',
          payload: { items },
        }),
        err => this.ngRedux.dispatch({
          type: 'ARTICLES_FETCH_ERROR',
          payload: { err },
        })
      );
  }

  setFilter(query) {
    if (!query) {
      this.ngRedux.dispatch({
        type: 'ARTICLES_FILTER_RESET',
      });
    } else {
      this.ngRedux.dispatch({
        type: 'ARTICLES_FILTER',
        payload: { query },
      });
    }
  }
}
