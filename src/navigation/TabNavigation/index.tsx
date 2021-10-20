import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigationParamList} from './interface';

import {COLORS} from 'styles';

import {tabs} from './tab';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator<TabNavigationParamList>();
export default function TabNavigation() {
  const handleTabBarVisible = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Stores') {
      return false;
    }
    return true;
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: COLORS.lightGrey,
        tabBarActiveTintColor: COLORS.black,
      }}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.component}
          options={{
            title: tab.options.title,
            tabBarIcon: tab.options.tabBarIcon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
