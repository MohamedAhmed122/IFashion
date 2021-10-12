export enum ActionType {
  GET_SHOPS_LIST = 'GET_SHOP_LIST',
  SEARCH_SHOPS = 'SEARCH_SHOPS',
  SHOPS_LOADING = 'SHOPS_LOADING',
  SHOPS_ERROR = 'SHOPS_ERROR',
}

interface GetShops {
  type: ActionType.GET_SHOPS_LIST;
  payload: [];
}

interface SearchShops {
  type: ActionType.SEARCH_SHOPS;
  payload: string;
}

interface ShopsLoading {
  type: ActionType.SHOPS_LOADING;
}

interface ShopsError {
  type: ActionType.SHOPS_ERROR;
  payload: string;
}

export type Action = GetShops | SearchShops | ShopsLoading | ShopsError;
