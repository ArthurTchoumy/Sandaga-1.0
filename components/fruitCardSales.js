import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function FruitCardSales({fruit}) {
    const navigation = useNavigation();
  return (
    <View className="mr-6">
        <TouchableOpacity onPress={()=> navigation.navigate('CategorieProduit', {...fruit, color: fruit.color(1)})} className="flex-row justify-center -mb-9 shadow-lg z-20" >
        <Image source={fruit.image} style={{height: 45,width: 45,  shadowColor: fruit.shadow,top:18,
            overflow: 'visible',
            shadowRadius: 15,
            shadowOffset: {width: 0, height: 20},
            shadowOpacity: 0.4
            }} />
        </TouchableOpacity>
        
        <View 
        style={{backgroundColor: fruit.color(0.4), height: 65, width: 65,borderRadius:40}} 
        className={`  flex justify-end items-center`}>
        
        <Text style={{top:15}}
        className="font-semibold text-center text-gray-800 tracking-wide pb-3">{fruit.name}</Text>
        </View>
    </View>
  )
}