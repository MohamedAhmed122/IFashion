import {axios} from 'api/axios';
import {Stores} from 'types';
import {Endpoints} from '..';

export const getStores = () => {
  return axios.get<Stores[]>('stores');
};
