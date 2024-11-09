import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import ListingData from '@/data/destination.json';
import { TouristSpot } from '@/components/listing';

export default function ListDetail() {
  const { id } = useLocalSearchParams();
  
  // Encontrando o item com o ID correspondente
  const Item:TouristSpot=(ListingData as TouristSpot[]).find((item)=>item.id==1)

  useEffect(() => {
    console.log("Item encontrado:", Item);
  }, [Item]);

  return (
    <View style={{ padding: 16 }}>
      {Item ? (
        <>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{Item.name}</Text>
          <Text style={{ marginTop: 8, fontSize: 16 }}>{Item.description}</Text>
        </>
      ) : (
        <Text style={{ fontSize: 18 }}>Local não encontrado.</Text>
      )}
    </View>
  );
}
