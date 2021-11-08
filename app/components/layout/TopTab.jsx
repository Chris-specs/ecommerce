import React, { useEffect } from 'react';
import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../../assets/Logo.png';
import { width, height } from '../../utils/dimensions';

const TopTab = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={{ width: 35, height: 35 }} source={Logo} />
            <TextInput
                placeholder='Buscar en Betterware'
                style={styles.input}
                editable={false}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Ionicons name={'ios-cart-outline'} size={35} color='#FFF' />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '10%',
        paddingBottom: '3%',
        paddingHorizontal: '5%',
        backgroundColor: '#07ADC7',
    },
    input: {
        width: '70%',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        borderRadius: 99,
    },
});

export default TopTab;
