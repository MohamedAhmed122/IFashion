import React from 'react';
import {Loader, Screen} from 'common';

interface StoreScreenProps {}

export const StoreScreen: React.FC<StoreScreenProps> = () => {
  return (
    <Screen>
      <Loader defaultLoader />
    </Screen>
  );
};
