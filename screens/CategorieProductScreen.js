import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, MinusIcon, PlusIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import StarRating from 'react-native-star-rating';
import infos from '../assets/images/infos.png';
import fromage from '../assets/images/fromage.png';
import bag from '../assets/images/bag.png';
export default function CategorieProductScreen(props) {
    let fruit = props.route.params;
    const navigation = useNavigation();
    console.log('fruit: ',fruit);
  return (
   
    <SafeAreaView style={{color:'white'}} className="flex-1 flex justify-between">
            <View className="navbar mx-5 flex-row justify-between items-center">
                <TouchableOpacity onPress={()=> navigation.goBack()} className="border border-gray-300 rounded-xl">
                    <ChevronLeftIcon size="30" color="gray" />
                </TouchableOpacity>
                <Image source ={infos} style={{width: 25,height: 25,borderRadius:15}}></Image>
            </View>
            
            <View className="flex-row justify-center  pb-10" style={{
                shadowColor: fruit.shadow,
                shadowRadius: 50,
                shadowOffset: {width: 0, height: 50},
                shadowOpacity: 0.7,
                width:320,
                bottom:10,
                justifyContent:'center',
                alignItems:'center',
                marginLeft:20,
                height:300,
                backgroundColor:'#B2DFDB',
                borderRadius:15,
                
                
            }}>
                <Image source={fruit.image} style={{width: 230, height: 230}} />
            </View>
            <View  className="flex-row justify-between items-center space-x-8 mb-4">
            <View style={{marginLeft:20,bottom:10}}>
                <View style={{width:70,height:20,borderColor:'#45797E',borderWidth:1,borderRadius:5}}>
                    <Text  style={{color:'#457E79'}}>vegetables</Text>
                </View>
                <Text className='text-xl font-bold'>Broccoli</Text>
                <Text style={{opacity:0.5}}className='text-l'>approx 100 gm</Text>
            </View>
                
            <View style={{bottom:20,marginRight:15}} className="flex-row items-center space-x-2">
        <TouchableOpacity  className="bg-gray-300 p-1 rounded-lg">
                <PlusIcon size="20" color="black"/>
         </TouchableOpacity>
         <Text>1</Text>
         <TouchableOpacity  className="bg-gray-300 p-1 rounded-lg">
                <MinusIcon size="20" color="#45797E" borderColor='#45797E' borderWidth='1' backgroundColor='white'/>
         </TouchableOpacity>
        </View>
        </View>
        <View style={{marginLeft:20,bottom:30}}>
        <Text style={{opacity:0.3}}>___________________________________________________</Text>
        <View style={{flexDirection: 'row'}}>
            
            <View style={{width:40,height:40,backgroundColor:'#B2DFDB',borderRadius:7,top:2}}>
            <Image source={fromage} style={{width:30,height:30,justifyContent:'center',alignItems:'center'}}></Image>
            </View>
            <View style={{marginLeft:10}}>
            <Text className='text-x font-bold'>Agrifarm Inc</Text>
            <Text style={{opacity:0.5}} className='text-l'>F5RJ+FJF,Chairtakol</Text>
            </View>
            <View style={{marginLeft:80,opacity:0.5,top:5}}>
            <Text>4.9 (89)</Text>
            </View>
            
        </View>
        <Text style={{opacity:0.3}}>____________________________________________________</Text>
        </View>
        <View style={{marginLeft:20,bottom:30}}>
            <Text className='text-x font-bold'>Description</Text>
            <Text  style={{opacity:0.5}}>Broccoli is an edible green plant in the cablage</Text>
            <Text  style={{opacity:0.5}}>Family whose large flowering head, stalk and</Text>
            <Text  style={{opacity:0.5}}>Small associated leaves are Read more</Text>
        </View>
        <View style={{marginLeft:20,bottom:10}}>
            <View className="flex-row  items-center  space-x-4">
            <TouchableOpacity 
                style={{
                    backgroundColor: 'white', 
                    opacity: 0.8,
                    width:35,
                    height:35,
                    alignItems:'center',
                    justifyContent:'center',
                    shadowColor: 'orange',
                    borderWidth:1,
                    borderRadius:10,
                    borderColor:'#B2DFDB',
                    shadowRadius: 25,
                    shadowOffset: {width: 0, height: 15},
                    shadowOpacity: 0.4,
                }} className="">
                    <Image source={bag} style={{width:20,height:20}}></Image>
                  
                </TouchableOpacity>
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
                    <Text style={{color:'#45797E'}} className="text-xl text-center text-white font-bold">Add to card $ 1.50</Text>
                </TouchableOpacity>
            </View>
        
            </View>
            
            </SafeAreaView>
       
  )
}