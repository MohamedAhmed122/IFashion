import {combineReducers} from 'redux';
import {shopReducer} from './shop/reducer';

const rootReducer = combineReducers({
  shops: shopReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
