import React from 'react';

import {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from 'react-native-toast-message';

import {styles} from './style';
export const toastConfig = {
  success: ({props, ...rest}: {props: BaseToastProps}) => (
    <BaseToast
      text1NumberOfLines={1}
      text2NumberOfLines={2}
      {...rest}
      style={styles.styleContainer}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.successText1Style}
      text1={props.text1}
      text2={props.text2}
    />
  ),

  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      text1Style={styles.errorText1Style}
      text2Style={styles.errorText2Style}
      text1NumberOfLines={1}
      text2NumberOfLines={3}
    />
  ),
};
