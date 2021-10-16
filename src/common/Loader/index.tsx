import React from 'react';
import LottieView from 'lottie-react-native';
import {styles} from './style';
import {StyleProp, ViewStyle} from 'react-native';

interface LoaderProps {
  defaultLoader?: boolean;
  loaderStyle?: StyleProp<ViewStyle>;
}

export const Loader: React.FC<LoaderProps> = ({defaultLoader, loaderStyle}) => {
  if (defaultLoader) {
    return (
      <LottieView
        style={[styles.loader, loaderStyle]}
        source={require('assets/json/ActivityLoading.json')}
        autoPlay
        loop
      />
    );
  } else {
    return (
      <LottieView source={require('assets/json/loading.json')} autoPlay loop />
    );
  }
};
