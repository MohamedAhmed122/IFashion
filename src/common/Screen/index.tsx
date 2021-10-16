import React from 'react';
import {SafeAreaView, ScrollView, StyleProp, ViewStyle} from 'react-native';
import styles from './style';

interface ScreenProps {
  scroll?: boolean;
  scrollContainerStyle?: StyleProp<ViewStyle>;
}

export const Screen: React.FC<ScreenProps> = ({
  scroll,
  scrollContainerStyle,
  children,
}) => {
  if (scroll) {
    return (
      <ScrollView style={[styles.screen, scrollContainerStyle]}>
        {children}
      </ScrollView>
    );
  } else {
    return <SafeAreaView style={styles.scrollScreen}>{children}</SafeAreaView>;
  }
};
