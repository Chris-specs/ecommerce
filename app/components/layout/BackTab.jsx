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
import { width, height } from '../../utils/dimensions';

const BackTab = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Ionicons name={'chevron-back-outline'} size={33} color='#303030' />
            </TouchableOpacity>
            <View></View>
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
        zIndex: 1,
        top: 0,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff68',
        borderRadius: 10,
        width: 40,
        height: 40,
    }
});

export default BackTab;
