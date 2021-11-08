import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Splash from '../screens/Splash'
import Home from '../screens/Home'
import Product from '../screens/Product'
import Cart from '../screens/Cart'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Splash'}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Product' component={Product} />
                <Stack.Screen name='Cart' component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
 
export default Navigation;