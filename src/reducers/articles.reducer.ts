import { fromJS, Map } from 'immutable';

const INITIAL_STATE = fromJS({
  isPending: false,
  isSuccess: false,
  isError: false,
  items: [],
  list: [],
  err: {},
});

export type IArticles = Map<string, any>;

export function articlesReducer(state: IArticles = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case 'ARTICLES_FETCH_PENDING':
    {
      return state.merge({
        isPending: true,
        isSuccess: false,
        isError: false,
      });
    }
    case 'ARTICLES_FETCH_ERROR':
    {
      return state.merge({
        isPending: false,
        isError: true,
        err: action.payload.err,
      });
    }
    case 'ARTICLES_FETCH_SUCCESS':
    {
      return state.merge({
        isPending: false,
        isSuccess: true,
        items: action.payload.items,
        list: action.payload.items,
      });
    }
    case 'ARTICLES_FILTER':
    {
      const regex = new RegExp(action.payload.query, 'i');

      return state.set('list', state.get('items').filter(
        item => item.get('name').match(regex)
      ));
    }
    case 'ARTICLES_FILTER_RESET':
    {
      return state.set('list', state.get('items'));
    }
    default:
    {
      return state;
    }
  }
}
