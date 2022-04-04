import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MyCart from '../screens/MyCart';
import ProductInfo from '../screens/ProductInfo';
import InformationsE from '../screens/InformationsE';
import InformationsL from '../screens/InformationsL';
import Products from '../screens/Products';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='InformationsE' component={InformationsE} />
        <Stack.Screen name='InformationsL' component={InformationsL} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="Products" component={Products} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
