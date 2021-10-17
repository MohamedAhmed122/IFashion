import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {AppText} from 'common';
import styles from './style';

interface TopTabProps {
  setActiveTab(type: string): void;
  activeTab: string;
}

export const TopTab: React.FC<TopTabProps> = ({activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          activeTab === 'Cart' ? styles.activeTab : styles.tab,
          styles.TabLeft,
        ]}
        onPress={() => setActiveTab('Cart')}>
        <AppText>Cart</AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={activeTab === 'Clothe' ? styles.activeTab : styles.tab}
        onPress={() => setActiveTab('Clothe')}>
        <AppText> Clothe</AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          activeTab === 'Fashion' ? styles.activeTab : styles.tab,
          styles.tabRight,
        ]}
        onPress={() => setActiveTab('Fashion')}>
        <AppText> Fashion</AppText>
      </TouchableOpacity>
    </View>
  );
};
