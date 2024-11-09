import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CategoryCard from './category_card';
import { Colors } from '@/constants/Colors';
interface Category {
    title: string;
    iconName: string;
}

interface CategoryCardProps {
    onCatChanged: (category: string) => void; // Incluindo o onCatChanged nas props
}
export default function Category({onCatChanged}:CategoryCardProps) {
    const categories = [
        { title: 'Beaches', iconName: 'add' },
        { title: 'Mountains', iconName: 'add' },
        { title: 'Restaurants', iconName: 'restaurant' },
        { title: 'Hotels', iconName: 'bed' },
        { title: 'Museums', iconName: 'color-palette' },
        { title: 'Parks', iconName: 'leaf' },
        { title: 'Shopping', iconName: 'cart' },
        { title: 'Nightlife', iconName: 'moon' },
        { title: 'Adventure', iconName: 'rocket' },
        { title: 'Events', iconName: 'calendar' },
    ];
    const [category,setCategory]=useState<string>('All')

    const onCategoryChanged=(category:string)=>{
        setCategory(category)
        
    }

    return (
        <View>
            <Text style={{ fontSize: 22, fontWeight: '700', color: Colors.black, marginTop: 5 }}>Categories</Text>
            <CategoryCard categories={categories} onCatChanged={onCategoryChanged}  />

        </View>
    );
}
