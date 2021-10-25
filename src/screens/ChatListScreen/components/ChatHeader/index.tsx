import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {AppText} from 'common';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from 'styles';
import styles from './style';

interface ChatHeaderProps {}
export const ChatHeader: React.FC<ChatHeaderProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>😁</Text>
        <AppText
          style={[styles.text, styles.space]}
          fontFamily="NotoSansMono-Bold">
          Be
        </AppText>
        <AppText style={styles.text} fontFamily="NotoSansMono-Medium">
          happy
        </AppText>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="bell" size={25} color={COLORS.lightGrey} />
      </TouchableOpacity>
    </View>
  );
};
