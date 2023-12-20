import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { LogBox } from 'react-native';
import CartScreen from '../screens/CartScreen';
import CategorieScreen from '../screens/CategorieScreen';
import CategorieCartScreen from '../screens/CategorieCartScreen';
import CategorieProductScreen from '../screens/CategorieProductScreen';

const Stack = createNativeStackNavigator();


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen} />
        <Stack.Screen name="Cart" options={{headerShown: false}} component={CartScreen} />
        <Stack.Screen name="Categorie" options={{headerShown: false}} component={CategorieScreen} />
        <Stack.Screen name="CategorieProduit" options={{headerShown: false}} component={CategorieProductScreen} />
        <Stack.Screen name="CategorieCart" options={{headerShown: false}} component={CategorieCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
