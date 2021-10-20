import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import styles from './style';

interface ScreenProps {
  scroll?: boolean;
  ContainerStyle?: StyleProp<ViewStyle>;
}

export const Screen: React.FC<ScreenProps> = ({
  scroll,
  ContainerStyle,
  children,
}) => {
  if (scroll) {
    return (
      <ScrollView style={[styles.screen, ContainerStyle]}>
        {children}
      </ScrollView>
    );
  } else {
    return (
      <SafeAreaView style={styles.scrollScreen}>
        <View style={[styles.containerChildren, ContainerStyle]}>
          {children}
        </View>
      </SafeAreaView>
    );
  }
};
