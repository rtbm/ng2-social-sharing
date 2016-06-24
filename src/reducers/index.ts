import { combineReducers } from 'redux';
import { IArticles, articlesReducer } from './articles.reducer';

export interface IAppState {
  articles?: IArticles;
}

export default combineReducers<IAppState>({
  articles: articlesReducer,
});
