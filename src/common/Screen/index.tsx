import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from './style';

interface ScreenProps {
  scroll?: boolean;
}

export const Screen: React.FC<ScreenProps> = ({scroll, children}) => {
  if (scroll) {
    return <ScrollView style={styles.screen}>{children}</ScrollView>;
  } else {
    return <SafeAreaView style={styles.scrollScreen}>{children}</SafeAreaView>;
  }
};
