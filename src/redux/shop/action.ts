import {Dispatch} from 'redux';

import {getShops} from '../../api/store/getShops';
import {Action, ActionType} from './types';
import {errorHandler} from '../../utils/errorHandler';

export const getShopsList = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.SHOPS_LOADING});
  try {
    const data: any = await getShops();
    dispatch({type: ActionType.GET_SHOPS_LIST, payload: data});
  } catch (error: any) {
    errorHandler(error);
    console.log(error, 'error getShopsList');
  }
};
