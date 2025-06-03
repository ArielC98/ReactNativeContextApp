
import React from 'react'
import { HomeScreen } from '../screens/home/HomeScreen';
import { SettingsScreen } from '../settings/SettingsScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name = "Home" component={HomeScreen}/>
      <BottomTab.Screen name = "Profile" component = {ProfileScreen}/>
      <BottomTab.Screen name = "Settings" component = {SettingsScreen}/>
    </BottomTab.Navigator>
  )
}
