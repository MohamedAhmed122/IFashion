import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {DeleteAction} from '../DeleteAction';
import {ChatList as ChatListItem} from 'types';

interface ChatListPros {
  item: ChatListItem;
  onPress(id: string): void;
}

export const ChatList: React.FC<ChatListPros> = ({item, onPress}) => {
  const {isActive, msg, msgNum, username, image, id} = item;
  return (
    <Swipeable
      containerStyle={styles.containerStyle}
      renderRightActions={() => <DeleteAction />}>
      <TouchableOpacity
        onPress={() => onPress(id)}
        style={[styles.container, isActive && styles.activeContainer]}>
        <View style={styles.imageContainer}>
          <Image source={image} resizeMode="cover" style={styles.avatar} />
          <View>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.msg}>
              {msg.length > 23 ? msg.substring(0, 23 - 3) + '...' : msg}
            </Text>
          </View>
        </View>
        {msgNum <= 0 ? (
          <Text style={styles.date}>10:21AM</Text>
        ) : (
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{msgNum}</Text>
          </View>
        )}
      </TouchableOpacity>
    </Swipeable>
  );
};
