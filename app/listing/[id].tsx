import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function ListDetail() {
    const {id}=useLocalSearchParams()
  return (
    <View>
      <Text>ListDetail {id}</Text>
    </View>
  )
}