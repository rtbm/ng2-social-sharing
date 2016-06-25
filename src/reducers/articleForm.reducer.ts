import { fromJS, Map } from 'immutable';

const INITIAL_STATE = fromJS({
  isPending: false,
  isSuccess: false,
  isError: false,
  isModalVisible: false,
  err: {},
});

export type IArticleForm = Map<string, any>;

export function articleFormReducer(state: IArticleForm = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case 'ARTICLE_FORM_PENDING':
    {
      return state.merge({
        isPending: true,
        isSuccess: false,
        isError: false,
      });
    }
    case 'ARTICLES_FORM_ERROR':
    {
      return state.merge({
        isPending: false,
        isError: true,
        err: action.payload.err,
      });
    }
    case 'ARTICLE_FORM_SUCCESS':
    {
      return state.merge({
        isPending: false,
        isSuccess: true,
      });
    }
    case 'ARTICLE_FORM_SHOW': {
      return state.set('isModalVisible', true);
    }
    case 'ARTICLE_FORM_HIDE': {
      return state.set('isModalVisible', false);
    }
    default:
    {
      return state;
    }
  }
}
