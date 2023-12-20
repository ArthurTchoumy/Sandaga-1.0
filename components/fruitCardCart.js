import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { MinusIcon, PlusIcon, DeleteIcon } from 'react-native-heroicons/solid'
import dele from '../assets/images/delete.png';
import papaye from '../assets/images/papaye.png';

export default function FruitCardCart({fruit}) {
  return (
    <View className="flex-row justify-between items-center space-x-8 mb-4">
        <View className="ml-5">
            <TouchableOpacity className="flex-row justify-center -mb-10 -ml-10 shadow-lg z-20" >
            <Image source={fruit.image} style={{height: 45,width: 45,  shadowColor: fruit.shadow,
                overflow: 'visible',
                shadowRadius: 15,
                shadowOffset: {width: 0, height: 20},
                shadowOpacity: 0.4,
                marginLeft:35,top:15,
                }} />
            </TouchableOpacity>
            
            <View 
                style={{backgroundColor: fruit.color(0.4), height: 60, width: 60,borderRadius:10}} 
                className={`  flex justify-center items-center`}>
            </View>
        </View>
        <View className="flex-1 space-y-1">
            <Text style={{color: themeColors.text}} className=" text-base font-bold">{fruit.name}</Text>
            {/* <Text style={{marginLeft:-10}}>1X</Text> */}
            <Text style={{color: themeColors.text}} className=" text-base font-bold">$ {fruit.price}</Text>
        </View>
        <View>
        <TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
                <PlusIcon size="20" color="black"/>
         </TouchableOpacity>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    customelement:{
        paddingTtop: 20,
        flexDirection: 'row',
        display: 'flex',/* Ajustez la valeur selon vos besoins */
        position: 'relative'
      }
    });