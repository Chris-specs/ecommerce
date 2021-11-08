import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { width, height } from '../utils/dimensions';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartItem = ({ data, onRemove }) => {
    const [quantity, setQuantity] = useState(1);

    const removeToCart = (item) => {
        onRemove(item);
    };

    return (
        <View style={styles.card}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: data.images[0] }} />
            </View>
            <View style={styles.containerInfo}>
                <Text numberOfLines={1} style={styles.name}>
                    {data.name}
                </Text>
                <Text style={styles.code}>Código {data.code}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {data.price ? (
                        <Text style={styles.price}>${data.price}</Text>
                    ) : null}
                    <Text
                        style={[
                            styles.altPrice,
                            data.price ? null : { fontSize: 18 },
                        ]}
                    >
                        ${data.alt_price}
                    </Text>
                </View>
            </View>
            <View style={styles.containerQuantity}>
                {quantity === 1 ? (
                    <TouchableOpacity
                        style={styles.buttonRemove}
                        onPress={() => removeToCart(data)}
                    >
                        <Ionicons
                            name={'trash-outline'}
                            size={20}
                            color='#303030'
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.buttonRemove}
                        onPress={() => setQuantity(quantity - 1)}
                    >
                        <Ionicons name={'remove'} size={20} color='#303030' />
                    </TouchableOpacity>
                )}
                <View style={styles.containerNumber}>
                    <Text style={styles.quantity}>{quantity}</Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonAdd}
                    onPress={() => setQuantity(quantity + 1)}
                >
                    <Ionicons name={'add'} size={20} color='#FFF' />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '2%',
        padding: '3%',
        borderRadius: 10,
        backgroundColor: '#FFF',
        overflow: 'hidden',
    },
    containerImage: {
        width: 80,
        height: 80,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    containerInfo: {
        width: '50%',
        height: '100%',
        paddingHorizontal: '5%',
        justifyContent: 'center',
    },
    name: {
        fontFamily: 'poppins_bold',
        fontSize: 12,
        color: '#303030',
    },
    code: {
        fontFamily: 'poppins',
        fontSize: 9,
        color: '#828282',
    },
    price: {
        fontFamily: 'poppins_semibold',
        fontSize: 18,
        color: '#F96F00',
        marginRight: '3%',
    },
    altPrice: {
        fontFamily: 'poppins_semibold',
        fontSize: 10,
        color: '#05788A',
    },
    containerQuantity: {
        flexDirection: 'row',
    },
    buttonRemove: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 25,
        height: 25,
        borderWidth: 1,
    },
    buttonAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#303030',
        borderRadius: 5,
        width: 25,
        height: 25,
    },
    containerNumber: {
        width: 30,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantity: {
        fontFamily: 'poppins',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default CartItem;
