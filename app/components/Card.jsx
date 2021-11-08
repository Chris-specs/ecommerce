import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { width, height } from '../utils/dimensions';

const Card = ({ data }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Product', { data })}
            style={styles.card}
        >
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
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '46%',
        height: 230,
        margin: '2%',
        paddingTop: 0,
        borderRadius: 20,
        backgroundColor: '#FFF',
        overflow: 'hidden',
        shadowColor: '#004550',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2.5,

        elevation: 3,
    },
    containerImage: {
        width: '100%',
        height: '70%',
        padding: '1%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    containerInfo: {
        width: '100%',
        height: '30%',
        paddingVertical: '2%',
        paddingHorizontal: '5%',
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
});

export default Card;
