import {RootStackParam} from '../Root/interface';

import {TabNavigationParams} from './../TabNavigation/interface';
import {ShoppingStoreStackParams} from './../ShoppingStoreStack/interface';
import {FashionistaParams} from '../FashionStack/interface';
import {ProfileParams} from './../ProfileStack/interface';
import {CheckoutParams} from './../CheckoutStack/interface';
import {ChatParams} from './../ChatStack/interface';

export const Stacks = {
  ChatStack: ChatParams,
  CheckOutStack: CheckoutParams,
  ProfileStack: ProfileParams,
  FashionistaStack: FashionistaParams,
  ShoppingStack: ShoppingStoreStackParams,
  Tabs: TabNavigationParams,
  Root: RootStackParam,
};
