import React, { useMemo } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    TextInput,
    FlatList,
    StyleSheet,
} from 'react-native';
import { width, height } from '../utils/dimensions';
import Banner from '../assets/Banner.png';
import { FontAwesome5 } from '@expo/vector-icons';

import TopTab from '../components/layout/TopTab';
import Card from '../components/Card';

const Home = () => {
    const categories = [
        {
            name: 'Baño',
            icon: 'bath',
        },
        {
            name: 'Cocina',
            icon: 'utensils',
        },
        {
            name: 'Contigo',
            icon: 'user-friends',
        },
        {
            name: 'Hogar',
            icon: 'home',
        },
        {
            name: 'Limpieza',
            icon: 'hand-sparkles',
        },
        {
            name: 'Recámara',
            icon: 'bed',
        },
    ];

    const products = [
        {
            name: 'BETTER FRYER',
            images: [
                'https://img.betterware.com.mx/60LenZ6GoAg4qHn-VokaYocXIQg=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21533-1-Better-Fryer-Betterware.png',
                'https://img.betterware.com.mx/-XI7DfrQ4nBWzM_g6WTnUocVARw=/700x0/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21533-2-Better-Fryer-Betterware.png',
            ],
            code: '21533',
            price: '769',
            alt_price: '1,699',
            info: 'Cocina, hornea y fríe sin aceite con la mejor tecnología de la freidora de aire Better Fryer, hecha de acero con recubrimiento antiadherente. Cuenta con indicador LED, regulador de temperatura, temporizador y charola. Perfecta para preparar alimentos más saludables.',
        },
        {
            name: 'BARRA PLEGABLE',
            images: [
                'https://img.betterware.com.mx/bBWmVJV09Ta2XscT4_g-t8g1--4=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21838-1-Mesita-Plegable-Betterware.jpg',
                'https://img.betterware.com.mx/9dlG6O5WpyToT6AEGWEWWaLVjrA=/700x0/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21838-2-Mesita-Plegable-Betterware.jpg',
                'https://img.betterware.com.mx/d5kbldEwbeSC2I1aJTRm6fzxtU0=/700x0/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21838-3-Mesita-Plegable-Betterware.jpg',
                'https://img.betterware.com.mx/SjHKs8wqJEn57RYrSdGaEfikftU=/700x0/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21838-4-Mesita-Plegable-Betterware.jpg',
            ],
            code: '21838',
            price: '469',
            alt_price: '699',
            info: 'Si buscas un espacio extra en tu cocina o cualquier otro lugar de tu hogar, la Barra Plegable será ideal para ti. Úsala para organizar tus artículos, preparar comida, trabajar o estudiar, etc. ¡Es súper resistente! Soporta hasta 10 Kg.',
        },
        {
            name: 'TAZA INOX PRO NEGRA',
            images: [
                'https://img.betterware.com.mx/bob_cj8vfvt-QWLXv-cSSL4-Cko=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21047-1-Taza-Inox-Pro-Betterware.jpg',
            ],
            code: '21047',
            alt_price: '309',
            info: 'Disfruta de tus bebidas calientes hasta por 6 horas al servirlas en tu Taza Inox Pro Negra, que tiene una capacidad de 300 ml, cuenta con doble pared y está fabricada con acero inoxidable.',
        },
        {
            name: 'TERMO INOX PRO NEGRO',
            images: [
                'https://img.betterware.com.mx/N7HUALqmKgs8ifazisoMHhqYJpQ=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21046-1-Termo-Inox-Pro-Betterware.jpg',
                'https://img.betterware.com.mx/Y5lTFwZGNDWndC22a4xAvkQsh3I=/700x0/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21046-2-Termo-Inox-Pro-Betterware.jpg',
            ],
            code: '21046',
            alt_price: '379',
            info: 'Disfruta de tus bebidas calientes o frías hasta por 7 horas con el Termo Inox Pro Negro que cuenta con doble pared, tiene una capacidad de 800 ml y es de acero inoxidable. ¡Llévalo a donde quieras!',
        },
        {
            name: 'RENOVA COLCHÓN',
            images: [
                'https://img.betterware.com.mx/hMrHosF5yuga02wzp39Cyt1H1Z0=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21328-1-Renova-Colchon-Betterware.jpg',
                'https://img.betterware.com.mx/iDtH-YhKayxFSouZ6k8g_DxixgA=/700x0/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21328-2-Renova-Colchon-Betterware.jpg',
                'https://img.betterware.com.mx/UkmOaMNKf0cnTONfAehmGnkt8Ew=/700x0/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21328-3-Renova-Colchon-Betterware.jpg',
            ],
            code: '21328',
            price: '799',
            alt_price: '1,999',
            info: 'Renueva tu colchón de una manera súper fácil y económica con el Renova Colchón. Solo ponlo sobre tu cama y disfruta de la sensación de descanso que te brindará su cómodo material.',
        },
        {
            name: 'PEDI SPA',
            images: [
                'https://img.betterware.com.mx/JC8ytQmSsN6zCxdhmSJetbo4ZoU=/fit-in/640x640/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21435-1-Pedi-Spa-Betterware.png',
                'https://img.betterware.com.mx/sumziRjfZRqgzw8azR_WqM7-6Yo=/700x0/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21435-2-Pedi-Spa-Betterware.jpg',
                'https://img.betterware.com.mx/WlPmNsLt7qzL-5a6IXfMqFL7U2A=/700x0/https%3A%2F%2Fstorage.googleapis.com%2Fbetterware-production-media%2Fproducts%2F21435-3-Pedi-Spa-Betterware.jpg',
            ],
            code: '21435',
            alt_price: '699',
            info: 'Consiente tus pies al tener tu propio spa en casa con el Pedi Spa. Es una tina ligera y portátil que mantiene el agua caliente. Ideal para relajar los pies y hacerte el pedicure tú mismo.',
        },
    ];

    const memoData = useMemo(
        () =>
            ({ item }) =>
                <Card data={item} />,
        [products]
    );

    return (
        <View style={styles.screen}>
            <TopTab />
            <View style={styles.innerContainer}>
                <View style={styles.containerBackground}>
                    <Image
                        source={Banner}
                        style={styles.banner}
                        resizeMode={'contain'}
                    />
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.containerCategories}
                    overScrollMode={'never'}
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingRight: 35,
                    }}
                >
                    {categories.map((categorie, i) => (
                        <View key={i} style={styles.categorie}>
                            <FontAwesome5
                                name={categorie.icon}
                                size={30}
                                color='#7EACB4'
                            />
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={products}
                        numColumns={2}
                        renderItem={memoData}
                        keyExtractor={(item, i) => i}
                        style={{ marginTop: '0%', flexGrow: 1, height: '100%' }}
                        showsVerticalScrollIndicator={false}
                        overScrollMode={'never'}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
    },
    innerContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        padding: '5%',
        flexGrow: 1,
        flexShrink: 1,
    },
    container: {
        width: '100%',
        backgroundColor: '#FFF',
        flexGrow: 1,
        flexShrink: 1,
    },
    containerBackground: {
        width: '100%',
        height: '21%',
    },
    banner: {
        width: '100%',
        height: '100%',
    },
    containerCategories: {
        width: '100%',
        height: '20%',
        marginVertical: '0%',
        backgroundColor: '#FFF',
        overflow: 'hidden',
        flexGrow: 0,
        flexShrink: 1,
    },
    containerCategorie: {
        backgroundColor: '#FFF',
    },
    categorie: {
        width: 60,
        height: 60,
        margin: '2%',
        borderRadius: 99,
        borderWidth: 1,
        borderColor: '#7EACB4',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
