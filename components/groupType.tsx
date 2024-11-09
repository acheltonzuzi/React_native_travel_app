import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ListRenderItem } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
interface TravelPackage {
    id: number;
    name: string;
    image: string;
    rating: number;
    reviews: number;
}

interface groupProps {
    listgroup: TravelPackage[]
}
export default function GrouproupType({ listgroup }: groupProps) {
    const renderItem: ListRenderItem<TravelPackage> = ({ item }: { item: TravelPackage }) => (
        <TouchableOpacity>
            <View style={styles.cardContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View>
                    <Text style={styles.text}>{item.name}</Text>
                    <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                        <Ionicons name='star' color={Colors.primaryColor} size={15}></Ionicons>
                        <Text style={styles.text2}>{item.rating}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
    return (
        <View>
            <Text style={{ fontSize: 22, fontWeight: '700', color: Colors.black, marginTop: 5 }}>Top travel Group</Text>
            <FlatList
                data={listgroup}
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
        elevation: 3,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5

    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 10,
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
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.primaryColor
    }


});
