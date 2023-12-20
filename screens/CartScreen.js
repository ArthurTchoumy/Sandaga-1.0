import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import StarRating from 'react-native-star-rating';
import FruitCardCart from '../components/fruitCardCart';
import { cartItems } from '../constants';
import shop from '../assets/images/shop.png';

  
export default function CartScreen(props) {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-between bg-orange-50">
            <View className="navbar mx-5 flex-row justify-between items-center">
                <TouchableOpacity onPress={()=> navigation.goBack()} className="border border-gray-300 rounded-xl">
                    <ChevronLeftIcon size="30" color="gray" />
                </TouchableOpacity>
                <Image source ={shop} style={{width: 25,height: 25,borderRadius:15}}></Image>
            </View>
            <View className="cart mx-5 flex-1">
                <Text style={{color: themeColors.text}} className="text-2xl py-10">My</Text><Text style={{bottom:30}} className="font-bold text-2xl">Order</Text>
                <View>
                    {
                       cartItems.map((item,index)=>  <FruitCardCart fruit={item} key={index} />)
                    }
                </View>
                <Text>__________________________________________________</Text>
                <View style={{top:25}}>
                <View className="flex-row ">
                    <Text className="text-lg">Total price</Text><Text style={{marginLeft:170}} className="text-lg">$240.70</Text>
                </View>
                </View>
            </View>
            <View style={{bottom:35}}>
            <View className="flex-row justify-between items-center mx-7">
                <TouchableOpacity 
                style={{
                    backgroundColor: 'orange', 
                    opacity: 0.8,
                    shadowColor: 'orange',
                    shadowRadius: 25,
                    shadowOffset: {width: 0, height: 15},
                    shadowOpacity: 0.4,
                }} className="p-3 flex-1 rounded-xl">
                    <Text className="text-xl text-center text-white font-bold">Payment</Text>
                </TouchableOpacity>
            </View>
            </View>
            
            
        </SafeAreaView>
    
  )
}