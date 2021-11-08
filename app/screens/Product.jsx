import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import { width, height } from '../utils/dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import ProductTab from '../components/layout/ProductTab';

const Product = ({ navigation, route }) => {
    const data = route.params.data;

    const [active, setActive] = useState(false);
    const [image, setImage] = useState(data.images[0]);

    const validateCart = async () => {
        try {
            const items = await AsyncStorage.getItem('data');
            const cartItems = JSON.parse(items);
            if (cartItems === null) {
                await AsyncStorage.setItem('data', JSON.stringify([]));
            }
        } catch (error) {}
    };

    useEffect(() => {
        validateCart();
        return () => {};
    }, []);

    const addToCart = async (item) => {
        try {
            const items = await AsyncStorage.getItem('data');
            const cartItems = JSON.parse(items);
            const exist = cartItems.find(
                (element) => element.name == item.name
            );
            if (exist) {
                null;
            } else {
                cartItems.push(item);
                await AsyncStorage.setItem('data', JSON.stringify(cartItems));
            }
        } catch (error) {}
    };

    return (
        <View style={styles.screen}>
            <View style={styles.innerContainer}>
                <ProductTab />
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.containerInfo}>
                    <View style={styles.containerTop}>
                        <Text style={styles.name}>{data.name}</Text>
                        <TouchableOpacity onPress={() => setActive(!active)}>
                            {active ? (
                                <Ionicons
                                    name={'heart'}
                                    size={33}
                                    color='#303030'
                                />
                            ) : (
                                <Ionicons
                                    name={'heart-outline'}
                                    size={33}
                                    color='#303030'
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerPrices}>
                        {data.price ? (
                            <Text style={styles.price}>${data.price}</Text>
                        ) : null}
                        <Text
                            style={[
                                styles.altPrice,
                                data.price ? null : { fontSize: 40 },
                            ]}
                        >
                            ${data.alt_price}
                        </Text>
                    </View>
                    <Text style={styles.code}>Código {data.code}</Text>
                    <View style={styles.containerPrices}>
                        {data.images.map((image, i) => (
                            <TouchableOpacity
                                key={i}
                                onPress={() => setImage(image)}
                                style={styles.containerImage}
                            >
                                <Image
                                    style={styles.images}
                                    source={{ uri: image }}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <ScrollView
                        overScrollMode={'never'}
                        showsVerticalScrollIndicator={false}
                        style={styles.containerInfoText}
                    >
                        <Text style={styles.info}>{data.info}</Text>
                    </ScrollView>
                    <View
                        style={{
                            flexGrow: 1,
                            flexShrink: 1,
                            justifyContent: 'flex-end',
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => addToCart(data)}
                            style={styles.button}
                        >
                            <Ionicons
                                name={'ios-cart-outline'}
                                size={33}
                                color='#FFF'
                            />
                            <Text style={styles.textButton}>
                                Agregar al carrito
                            </Text>
                        </TouchableOpacity>
                    </View>
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
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '50%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 0,
    },
    containerInfo: {
        position: 'absolute',
        width: '100%',
        height: '60%',
        backgroundColor: '#FFF',
        zIndex: 0,
        bottom: 0,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingTop: '10%',
        paddingBottom: '10%',
        paddingHorizontal: '10%',
    },
    containerTop: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '-5%',
    },
    name: {
        fontFamily: 'poppins_bold',
        fontSize: 20,
        color: '#303030',
    },
    containerPrices: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontFamily: 'poppins_semibold',
        fontSize: 40,
        color: '#F96F00',
        marginRight: '5%',
    },
    altPrice: {
        fontFamily: 'poppins_semibold',
        fontSize: 18,
        color: '#05788A',
    },
    code: {
        fontFamily: 'poppins',
        fontSize: 15,
        color: '#828282',
        marginBottom: '2%',
    },
    containerImage: {
        width: 70,
        height: 70,
        borderRadius: 15,
        shadowColor: '#004550',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2.5,

        elevation: 3,
        marginRight: '5%',
    },
    images: {
        width: 70,
        height: 70,
        borderRadius: 15,
    },
    containerInfoText: {
        width: '100%',
    },
    info: {
        fontFamily: 'poppins',
        fontSize: 14,
        color: '#303030',
        paddingVertical: '3%',
    },
    button: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F96F00',
        borderRadius: 10,
        bottom: 0,
    },
    textButton: {
        fontFamily: 'poppins',
        fontSize: 15,
        color: '#FFF',
    },
});

export default Product;
