import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function FruitCard({fruit}) {
    const [isFavourite, setIsFavourite] = useState(false);
    const navigation = useNavigation();
  return (
    <View style={{width: 200, height:250,  borderRadius: 25, backgroundColor: fruit.color(1)}} className={`mx-5`}>
        <View className="flex-row justify-end">
            <TouchableOpacity
                onPress={()=> setIsFavourite(!isFavourite)}
                className="p-3 rounded-full mr-4 mt-4" 
                style={{backgroundColor: 'rgba(255,255,255,0.3)'}}
            >
                <HeartIcon size="15" color={isFavourite? fruit.shadow: 'white'} />
            </TouchableOpacity>
        </View>
        {/* <View className="flex-row justify-center" style={{boxShadow: '0px 120px 100px -40px rgba(0, 0, 0, 1)'}}> */}
        <View className="flex-row justify-center" style={{
            shadowColor: fruit.shadow,
            shadowRadius: 40,
            shadowOffset: {width: 0, height: 50},
            shadowOpacity: 0.6,
            }}>
            <Image source={fruit.image} style={{width: 100, height: 100}} />
        </View>
    
        <View className="ml-4 my-4">
            <Text className="font-bold text-xl text-white shadow">{fruit.name}</Text>
           
            
        </View>
        
        
        <TouchableOpacity onPress={()=> navigation.navigate('Product', {...fruit, color: fruit.color(1)})} style={{display:'flex',backgroundColor:'skyblue',borderRadius:15,height:30,marginBottom:10,width:80,marginLeft:63,alignItems:'center',justifyContent:'center'
                
                  
                }}>
                
                    <Text style={{color:'white'}}>ADD</Text>
                </TouchableOpacity>
                
    </View>
  )
}
