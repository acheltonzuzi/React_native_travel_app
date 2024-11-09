import { Image, StyleSheet, Platform, TouchableOpacity, View, Text, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {useHeaderHeight} from '@react-navigation/elements'
import style from '@/constants/Styles';
import Category from '@/components/category';
import Listing from '@/components/listing';
import ListingData from '@/data/destination.json'
import { Colors } from '@/constants/Colors';
export default function HomeScreen() {
  const headerHeight=useHeaderHeight()
  const [category,setCategory]=useState<string>('All')

    const onCategoryChanged=(category:string)=>{
        setCategory(category)
        console.log(category);
    }
  return (
    <>
      <Stack.Screen options={{
        headerTransparent: true, headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => { }}>
            <Image source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=female' }} style={{ width: 40, height: 40, borderRadius: 10 }}></Image>
          </TouchableOpacity>),
        headerRight: () => (
          <TouchableOpacity
            style={{
              marginRight: 20,
              backgroundColor: Colors.white,
              padding: 10,
              borderRadius: 10,
              elevation: 5
            }}
            onPress={() => { }}>
            <Ionicons name='notifications' size={20}></Ionicons>
          </TouchableOpacity>)
      }}></Stack.Screen>

  <View style={[style.container,{paddingTop:headerHeight}]}>
    <Text style={style.headingTxt}>Explore the beautiful world </Text>
    <View style={{flexDirection:'row',gap:5,alignItems:'center',marginTop:10}}>
      <View style={{flexDirection:'row',alignItems:'center',gap:5,backgroundColor:'white',padding:10,borderRadius:10,flex:1}}>
        <Ionicons name='search' size={18}></Ionicons>
        <TextInput style={{width:240,padding:5}} placeholder='Search...'></TextInput>
      </View>
      <TouchableOpacity style={{backgroundColor:Colors.primaryColor,padding:14,borderRadius:10}}><Ionicons name='options' size={28} color={'white'}></Ionicons></TouchableOpacity>
    </View>
    <Category onCatChanged2={onCategoryChanged}></Category>
    <Listing listings={ListingData}></Listing>
  </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
