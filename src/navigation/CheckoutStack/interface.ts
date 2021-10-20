export type NO_PARAMS = undefined;

export enum CheckoutParams {
  Cart = 'Cart',
  Payment = 'Payment',
  Review = 'Review',
  CartDetail = 'CartDetail',
}

export type CheckoutParamList = {
  Cart: NO_PARAMS;
  Payment: NO_PARAMS;
  Review: NO_PARAMS;
  CartDetail: NO_PARAMS;
};
