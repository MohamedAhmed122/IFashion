import {endpoints} from '..';
import {axios} from '../axios';
import {ShopList} from './types';

export const getShops = () => {
  return axios.get<ShopList>(endpoints.shops.getShops);
};
