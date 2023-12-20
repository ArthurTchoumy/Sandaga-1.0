import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { HeartIcon } from 'react-native-heroicons/solid'
import bag from '../assets/images/bag.png';

export default function CatCard({fruit}) {
    const [isFavourite, setIsFavourite] = useState(false);
  return (
    <View style={{width: 150, height:190,  borderRadius: 20, backgroundColor: fruit.color(1)}} className={`mx-5`}>
        <View className="flex-row justify-end">
            <TouchableOpacity
                onPress={()=> setIsFavourite(!isFavourite)}
                className="rounded-full mr-4 mt-4" 
                style={{backgroundColor: 'rgba(255,255,255,0.3)'}}
            >
                <HeartIcon size="20" color={isFavourite? fruit.shadow: 'red'} />
            </TouchableOpacity>
        </View>
        {/* <View className="flex-row justify-center" style={{boxShadow: '0px 120px 100px -40px rgba(0, 0, 0, 1)'}}> */}
        <View className="flex-row justify-center" style={{
            shadowColor: fruit.shadow,
            shadowRadius: 40,
            shadowOffset: {width: 0, height: 50},
            shadowOpacity: 0.6,
            }}>
            <Image source={fruit.image} style={{width: 65, height: 65}} />
        </View>
        
        <View className="ml-4 my-4">
            <Text style={{opacity:0.5}}>_________________</Text>
            <Text className="font-bold text-xl text-black shadow">{fruit.name}</Text>
            <Text className="text-lg text-black shadow tracking-wide  ">$ {fruit.price}</Text>
            
        </View>
          
        <TouchableOpacity style={{
                    display:'flex',
                    backgroundColor:'#4DB6AC',
                    borderRadius:15,
                    height:30,
                  //  marginBottom:1,
                  bottom:63,
                    width:30,
                    marginLeft:100,
                    alignItems:'center',
                    justifyContent:'center'
                    
                
                  
                }}>
                    <Image source={bag} style={{width: 20, height: 20}} />
                    {/* <Text style={{color:'white'}}>ADD</Text> */}
                </TouchableOpacity>
                
      
                
                
    </View>
  )
}
