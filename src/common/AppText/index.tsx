/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleProp, TextProps, TextStyle, Text} from 'react-native';

export interface AppTextProps
  extends Pick<TextProps, Exclude<keyof TextProps, 'style'>> {
  style?: StyleProp<TextStyle>;
  fontFamily?:
    | 'NotoSansMono-Black'
    | 'NotoSansMono-Bold'
    | 'NotoSansMono-ExtraBold'
    | 'NotoSansMono-ExtraLight'
    | 'NotoSansMono-Medium'
    | 'NotoSansMono-Regular'
    | 'NotoSansMono-Light'
    | 'NotoSansMono-Thin';
}

export const AppText: React.FC<AppTextProps> = ({
  fontFamily = 'NotoSansMono-Regular',
  style,
  ...props
}) => (
  <Text
    style={[{fontFamily, letterSpacing: 0.1, fontSize: 14}, style]}
    {...props}
  />
);
