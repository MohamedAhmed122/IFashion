export type NO_PARAMS = undefined;

export enum CheckoutParams {
  Cart = 'Cart',
  Payment = 'Payment',
  Review = 'Review',
  FavoriteItem = 'FavoriteItem',
  FavoriteFashion = 'FavoriteFashion',
}

export type CheckoutParamList = {
  Cart: NO_PARAMS;
  Payment: NO_PARAMS;
  Review: NO_PARAMS;
  FavoriteFashion: NO_PARAMS;
  FavoriteItem: NO_PARAMS;
};
