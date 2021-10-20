import {combineReducers} from 'redux';
import {shopReducer} from './shops/reducer';

const rootReducer = combineReducers({
  shops: shopReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
