import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface Category {
    title: string;
    iconName: string;
}

interface CategoryCardProps {
    categories: Category[];
    onCatChanged: (category: string) => void; // Incluindo o onCatChanged nas props
}

export default function CategoryCard({ categories, onCatChanged }: CategoryCardProps) { // Corrigindo a forma de desestruturar as props
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const scrollViewRef = useRef<ScrollView>(null);
    const itemRef = useRef<TouchableOpacity[] | null[]>([]);

    const handleSelectedCategory = (index: number) => {
        setActiveIndex(index);

        // Calcula a posição de rolagem para colocar o item clicado na primeira posição
        const itemWidth = 110; // Largura aproximada de cada item. Ajuste conforme necessário
        const scrollPosition = index * itemWidth;
        // Rola para a posição calculada com uma animação suave
        scrollViewRef.current?.scrollTo({
            x: scrollPosition,
            animated: true,
        });
        
        // Chama a função onCatChanged passando o título da categoria selecionada
        onCatChanged(categories[index].title);
    };

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            
            ref={scrollViewRef}
        >
            <View style={styles.container}>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        ref={(el) => (itemRef.current[index] = el)}
                        key={index}
                        onPress={() => handleSelectedCategory(index)}
                        style={activeIndex === index ? styles.activeButton : styles.button}
                    >
                        <Ionicons
                            name={category.iconName as any}
                            size={20}
                            style={activeIndex === index ? styles.activeTextColor : styles.textColor}
                        />
                        <Text style={activeIndex === index ? styles.activeTextColor : styles.textColor}>
                            {category.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        marginVertical: 10,
    },
    activeButton: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        marginVertical: 10,
    },
    textColor: {
        color: Colors.black,
    },
    activeTextColor: {
        color: Colors.white,
    },
});
