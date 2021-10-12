import {Action, ActionType} from './types';

interface ShopReducer {
  shops: any[];
  loading: boolean;
  error: string | null;
}
const initialState = {
  shops: [],
  loading: false,
  error: null,
};

export const shopReducer = (
  state: ShopReducer = initialState,
  action: Action,
): ShopReducer => {
  switch (action.type) {
    case ActionType.SHOPS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_SHOPS_LIST:
      return {
        loading: false,
        shops: action.payload,
        error: null,
      };
    case ActionType.SHOPS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ActionType.SEARCH_SHOPS:
      return {
        ...state,
        // shops:state.shops.filter(product =>
        //     product.name.toLowerCase().includes(action.payload.toLocaleLowerCase()),
        shops: [],
      };
    default:
      return state;
  }
};
