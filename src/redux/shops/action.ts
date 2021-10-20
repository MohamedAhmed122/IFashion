import {Dispatch} from 'redux';

import {getStores} from 'api/stores/getShops';
import {Action, ActionType} from './types';

export const getShopsList = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.SHOPS_LOADING});
  try {
    const res = await getStores();
    dispatch({type: ActionType.GET_SHOPS_LIST, payload: res.data});
  } catch (error: any) {
    console.log(error, 'error getShopsList');
  }
};
