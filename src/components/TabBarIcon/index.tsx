import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ChatParamList, ChatParams} from 'navigation/ChatStack/interface';
import {StackNavigationProp} from '@react-navigation/stack';

type navigation = StackNavigationProp<ChatParamList, ChatParams.ChatSettings>;

export const TabBarIcon: React.FC = () => {
  const navigation = useNavigation<navigation>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(ChatParams.Chat)}>
      <AntDesign name="message1" color="white" size={scale(25)} />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: 'black',
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
    top: '-20@s',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
