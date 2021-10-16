import React from 'react';
// TYPES
import {TabNavigationParams} from './interface';
// SCREEN && STACKS
import ShoppingStoreStack from 'navigation/ShoppingStoreStack';
import {FashionStack} from 'navigation/FashionStack';
import {ChatStack} from 'navigation/ChatStack';
import {CheckoutStack} from 'navigation/CheckoutStack';
import {SettingsScreen} from 'screens/SettingsScreen';
// ICONS && STYLES
import {scale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabBarIcon} from 'components/TabBarIcon';

export let tabs = [
  {
    id: 1,
    component: ShoppingStoreStack,
    name: TabNavigationParams.StoreTab,
    options: {
      title: 'STORES',
      tabBarIcon: ({color}: {color: string}) => (
        <Entypo name="shop" size={scale(27)} color={color} />
      ),
    },
  },
  {
    id: 2,
    component: FashionStack,
    name: TabNavigationParams.FashionTab,
    options: {
      title: 'FASHION',
      tabBarIcon: ({color}: {color: string}) => (
        <MaterialCommunityIcons
          name="account-search"
          size={scale(29)}
          color={color}
        />
      ),
    },
  },
  {
    id: 3,
    component: ChatStack,
    name: TabNavigationParams.ChatTab,
    options: {
      title: '',
      tabBarIcon: () => {
        return <TabBarIcon />;
      },
    },
  },
  {
    id: 4,
    component: CheckoutStack,
    name: TabNavigationParams.CheckoutTab,
    options: {
      title: 'CART',
      tabBarIcon: ({color}: {color: string}) => (
        <FontAwesome name="opencart" size={29} color={color} />
      ),
    },
  },

  {
    id: 5,
    component: SettingsScreen,
    name: TabNavigationParams.Settings,
    options: {
      title: 'SETTINGS',
      tabBarIcon: ({color}: {color: string}) => (
        <Ionicons name="settings-sharp" size={scale(29)} color={color} />
      ),
    },
  },
];
