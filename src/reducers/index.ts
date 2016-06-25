import { combineReducers } from 'redux';
import { IArticles, articlesReducer } from './articles.reducer';
import { IArticleForm, articleFormReducer } from './articleForm.reducer';

export interface IAppState {
  articles?: IArticles;
  articleForm?: IArticleForm;
}

export default combineReducers<IAppState>({
  articles: articlesReducer,
  articleForm: articleFormReducer,
});
