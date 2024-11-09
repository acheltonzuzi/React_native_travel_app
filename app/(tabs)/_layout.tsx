import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.black,
        headerShown: true,
        tabBarStyle:{
          borderTopWidth:0,
          padding:0,
          backgroundColor:Colors.bgColor
        },
        tabBarShowLabel:false,
        tabBarInactiveTintColor:'#999'
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',

          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={'compass'} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: 'Category',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={'space-dashboard'} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <View style={{paddingHorizontal:16,paddingVertical:12, backgroundColor:Colors.primaryColor, borderRadius:10}}>
              <Ionicons name={'search-outline'} size={28} color={Colors.white} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={'bookmark'} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={'person'} size={28} color={color} />
          ),
        }}
      />
      
    </Tabs>
  );
}
