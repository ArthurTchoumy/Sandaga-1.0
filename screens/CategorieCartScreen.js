import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, MinusIcon, PlusIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import StarRating from 'react-native-star-rating';


import sac from '../assets/images/sac.png';
export default function CategorieCartScreen(props) {
    let fruit = props.route.params;
    const navigation = useNavigation();
    console.log('fruit: ',fruit);
  return (
   
    <SafeAreaView style={{backgroundColor:'#B2DFDB'}} className="flex-1 flex justify-between">
            <View className="navbar mx-5 flex-row justify-between items-center">
                <TouchableOpacity onPress={()=> navigation.goBack()} className="border border-gray-300 rounded-xl">
                    <ChevronLeftIcon size="30" color="gray" />
                </TouchableOpacity>
        
            </View>
            <View>
            <Image source={sac} style={{width: 225, height: 430,bottom:40,position:'relative',marginLeft:55}} />
            </View>
           
       
            
        <View style={{width:365,height:300,bottom:10,backgroundColor:'white',borderRadius:30}}>
        <View style={{marginLeft:115,top:10,fontSize:25,top:20}}>
            
            <Text   className='text-xl font-bold' >Order Groceries</Text>
            <Text   style={{marginLeft:-10}} className='text-xl font-bold'>and Get delivered</Text>
            <Text   className='text-xl font-bold' >in few minutes</Text>
        </View>
     
            <View style={{top:60}} className="items-center ">
         
                <TouchableOpacity 
                style={{
                    borderRadius:10,
                    backgroundColor: 'white', 
                    opacity: 0.8,
                    shadowColor: 'orange',
                    borderWidth:1,
                    borderColor:'#B2DFDB',
                    alignItems:'center',
                    justifyContent:'center',
                    width:200,
                    height:40,
                    shadowRadius: 25,
                    shadowOffset: {width: 0, height: 15},
                    shadowOpacity: 0.4,
                }} className="">
                    <Text style={{color:'#45797E'}} className="text-xl text-center text-white font-bold">Get Started</Text>
                </TouchableOpacity>
            </View>
        
            </View>
            
            </SafeAreaView>
       
  )
}