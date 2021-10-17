export const activeTypeTitle = (activeTab: string): string =>
  activeTab === 'Cart'
    ? 'My Favorites'
    : activeTab === 'Fashion'
    ? 'My Favorite Fashionista'
    : 'My Favorite Clothe';
