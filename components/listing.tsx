import { View, Text, Image, StyleSheet, FlatList, ListRenderItem, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface TouristSpot {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    price: string;
    duration: string;
    location: string;
    category: string;
}

interface List {
    listings: TouristSpot[],
}

export default function Listing({ listings }: List) {
    const [loading, setLoading] = useState<boolean>(false)

   /*  useEffect(() => {
        console.log('Updating');
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 200)

    }, [category]) */
    const renderItem: ListRenderItem<TouristSpot> = ({ item }: { item: TouristSpot }) => (
        <Link href={`/listing/${item.id}}`} asChild>
            <TouchableOpacity>
                <View style={styles.cardContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />

                    <View style={styles.bookmark}><Ionicons name='bookmark-outline' size={18} color={Colors.white}></Ionicons></View>
                    <Text style={styles.textItem} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', marginBottom: 3 }}>
                        <Ionicons name='location' color={Colors.primaryColor} size={18}></Ionicons>
                        <Text style={{ color: Colors.primaryColor }}>{item.location}</Text>
                    </View>
                    <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        </Link>
    )

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={listings}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        marginTop: 10,
    },
    cardContainer: {
        marginRight: 20,
        backgroundColor: Colors.white,
        padding: 10,
        //width:220
        elevation: 3
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 20
    },
    card: {
        width: 150,
        height: 150,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    },
    cardText: {
        color: '#777',
        fontSize: 16,
        textAlign: 'center',
    },
    bookmark: {
        position: 'absolute',
        top: 185,
        right: 30,
        backgroundColor: Colors.primaryColor,
        borderRadius: 30,
        padding: 10,
        borderWidth: 2,
        borderColor: Colors.white
    },
    textItem: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 10
    }

});
