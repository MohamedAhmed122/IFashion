import React from 'react';
import LottieView from 'lottie-react-native';
import {ActivityIndicator} from 'react-native';
import {COLORS} from 'styles';

interface LoaderProps {
  defaultLoader?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({defaultLoader}) => {
  if (defaultLoader) {
    return <ActivityIndicator size="large" color={COLORS.black} />;
  } else {
    return (
      <LottieView source={require('assets/json/loading.json')} autoPlay loop />
    );
  }
};
