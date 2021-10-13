import React from 'react';
import {StyleProp, TextProps, TextStyle, Text} from 'react-native';

export interface NotoSansMonoProps
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

export const NotoSansMonoText: React.FC<NotoSansMonoProps> = ({
  fontFamily = 'NotoSansMono-Regular',
  style,
  ...props
}) => <Text style={[{fontFamily, letterSpacing: 0.1}, style]} {...props} />;
