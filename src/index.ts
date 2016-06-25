import 'reflect-metadata';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'ts-helpers';
import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { NgRedux } from 'ng2-redux';
import { ServerService } from './services/server.service';
import { ArticlesActions } from './actions/articles.actions';
import { ArticleFormActions } from './actions/articleForm.actions';
import { RtbmAppComponent } from './components/app.component';

declare let __PRODUCTION__: any;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

bootstrap(RtbmAppComponent, [
  HTTP_PROVIDERS,
  NgRedux,
  ServerService,
  ArticlesActions,
  ArticleFormActions,
]);
