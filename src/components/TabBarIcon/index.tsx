import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  RootNavigation,
  TabNavigationParams,
} from 'navigation/TabNavigation/interface';
import {Stacks} from 'navigation/Stacks';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScaledSheet, scale} from 'react-native-size-matters';

export const TabBarIcon: React.FC = () => {
  const navigation = useNavigation<RootNavigation>();

  const handlePress = () =>
    navigation.navigate(TabNavigationParams.ChatTab, {
      screen: Stacks.ChatStack.Chat,
    });

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
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
    top: '-17@s',
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
