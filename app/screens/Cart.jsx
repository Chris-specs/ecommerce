import React, { useState, useEffect, useMemo } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { width, height } from '../utils/dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../assets/Background.png';
import BackTab from '../components/layout/BackTab';
import CartItem from '../components/CartItem';

const Cart = () => {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [total, setTotal] = useState(0);

    const getCartItems = async () => {
        try {
            const items = await AsyncStorage.getItem('data');
            setData(JSON.parse(items));
        } catch (error) {}
    };

    const removeCartItems = async (item) => {
        try {
            const newItems = data.filter(
                (element) => element.name != item.name
            );
            await AsyncStorage.setItem('data', JSON.stringify(newItems));
            setFlag(!flag);
        } catch (error) {}
    };

    useEffect(() => {
        getCartItems();
        return () => {};
    }, [flag]);

    const memoData = useMemo(
        () =>
            ({ item }) =>
                (
                    <CartItem
                        onRemove={(item) => removeCartItems(item)}
                        data={item}
                    />
                ),
        [data]
    );

    return (
        <View style={styles.screen}>
            <View style={styles.containerBackground}>
                <Image source={Background} style={styles.background} />
            </View>
            <BackTab />
            <View style={styles.innerContainer}>
                <View style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={memoData}
                        keyExtractor={(item, i) => i}
                        style={{ marginTop: '0%', flexGrow: 1, height: '100%' }}
                        showsVerticalScrollIndicator={false}
                        overScrollMode={'never'}
                    />
                </View>
                <View style={styles.containerI}>
                    <View style={styles.containerResult}>
                        <View style={styles.containerInfoResult}>
                            <View style={styles.containerInfoItem}>
                                <Text style={styles.items}>Subtotal</Text>
                                <Text style={styles.items}>${total}</Text>
                            </View>
                            <View style={styles.containerInfoItem}>
                                <Text style={styles.items}>Gastos de envio</Text>
                                <Text style={styles.items}>GRATIS</Text>
                            </View>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#303030',
                                }}
                            ></View>
                            <View style={styles.containerInfoItem}>
                                <Text style={styles.total}>Total</Text>
                                <Text style={styles.total}>${total}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Pagar</Text>
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
        padding: '5%',
        flexGrow: 1,
        flexShrink: 1,
    },
    container: {
        width: '100%',
        flexGrow: 1,
        flexShrink: 1,
        marginBottom: '5%'
    },
    containerBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: '#7EACB4',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0,
        position: 'absolute',
    },
    background: {
        width: 255,
        height: 50.5,
    },
    containerI: {
        width: '100%',
        height: 250,
        flexGrow: 0,
        flexShrink: 1,
    },
    containerResult: {
        height: '100%',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10
    },
    containerInfoResult: {
        padding: 10,
    },
    containerInfoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    items: {
        fontFamily: 'poppins_semibold',
        fontSize: 13
    },
    total: {
        fontFamily: 'poppins_semibold',
        fontSize: 18
    },
    button: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05788A',
        borderRadius: 10,
        bottom: 0,
    },
    textButton: {
        fontFamily: 'poppins',
        fontSize: 15,
        color: '#FFF',
    },
});

export default Cart;
