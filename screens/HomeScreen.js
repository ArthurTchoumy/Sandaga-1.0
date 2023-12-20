import { View, Text, TouchableOpacity, Image, ScrollView, Touchable ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Bars3CenterLeftIcon, HeartIcon, ShoppingCartIcon} from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { Colors } from '../theme';
import FruitCard from '../components/fruitCard';
import navigation from '../components/navigation';
import { useNavigation } from '@react-navigation/native';
import FruitCardSales from '../components/fruitCardSales';
import { featuredFruits, categories } from '../constants';
import k from '../assets/images/k.jpg';
import house from '../assets/images/house.png';
import panier from '../assets/images/panier.png';
import connexion from '../assets/images/connexion.png';
import house1 from '../assets/images/house1.png';
import house2 from '../assets/images/house2.png';


export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Oranges');
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 white">
        {/* top bar */}
        <View className="navbar mx-5 flex-row justify-between items-center">
          <Bars3CenterLeftIcon size="30" color="black" />
          <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>
          <Image source ={k} style={{width: 50,height: 50,borderRadius:15}}></Image> 
          </TouchableOpacity>
        </View>
        {/* categories */}
        <View className="mt-4">
          <Text style={{color: themeColors.text}} 
          className="text-2xl tracking-widest font-medium ml-5">Discorver Seasonal</Text>
          <Text style={{color: themeColors.text}}  className="text-3xl font-semibold ml-5">Fruits and Vegetables</Text>
          <ScrollView className="mt-8 px-5" horizontal showsHorizontalScrollIndicator={false}>
            {
              categories.map((category, index)=>{
                let isActive = category == activeCategory;
                let textClass = `text-xl   ${isActive? ' font-bold': ''}`;
                let buttonClass = `mr-8 relative rounded-2xl`;
                return (
                  <TouchableOpacity 
                    onPress={()=> setActiveCategory(category)} 
                    key={index} 
                    className={buttonClass}>
                    <Text style={{color: Colors.text}} className={textClass}>{category}</Text>
                    {
                      isActive? (
                        <Text className="font-extrabold -mt-3 ml-2 text-orange-400">__________</Text>
                      ):null
                    }
                    
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>
        {/* carousel */}
        <View className="carousel mt-8">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              featuredFruits.map((fruit, index)=>{
                return (
                  <FruitCard fruit={fruit} key={index} />
                )
              })
            }
          </ScrollView>
        </View>

        {/* hot sales */}
      {/* <View className="mt-8 pl-5 space-y-1">
        <Text style={{color: themeColors.text}} className="text-xl font-bold">Nearby Shop</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{overflow: 'visible'}}>
          {
            [...featuredFruits].reverse().map((fruit, index)=>{
              return (
                <FruitCardSales key={index} fruit={fruit} />
              );
            })
          }
        </ScrollView>
      </View> */}

        <Text style={{color: themeColors.text,marginLeft:15,marginTop:5}} className="text-xl font-bold">Nearby Shop</Text>
      <View style={styles.cont4}>
        <Text style={{position:'relative',left:72,top:5,display: 'flex'}}>Xenter Shop</Text>
        <Text style={{position:'relative',left:72,top:10,display: 'flex'}}>2356 Toltrican Stre</Text>
        <Text style={{position:'relative',left:72,top:15,display: 'flex'}}>9A.M - 7 P.M</Text>
          <View style={{height:50,width:60,backgroundColor:'plum',display: 'flex',marginLeft:'auto',marginRight:'auto',top:-40,left:-55,borderRadius:15}}>
      <Image style={{height:35,width:35,top:10, marginLeft:'auto',marginRight:'auto',display: 'flex'}} source={house1}></Image>
      </View>

      </View>
      <View style={styles.cont5}>
      <Text style={{position:'relative',left:72,top:10,display: 'flex'}}>Xenter Shop</Text>
        <Text style={{position:'relative',left:72,top:10,display: 'flex'}}>2356 Toltri</Text>
        <Text style={{position:'relative',left:72,top:15,display: 'flex'}}>9A.M - 7 P.M</Text>
      <View style={{height:50,width:60,backgroundColor:'plum',marginLeft:'auto',marginRight:'auto',top:-45,left:-35,borderRadius:15}}>
      <Image style={{height:35,width:35,top:10, marginLeft:'auto',marginRight:'auto'}} source={house2}></Image>
      </View>
      </View>

      <View style={{bottom:25, flexDirection: 'row'}}>
      <View className="navbar mx-5 flex-row justify-between items-center">
          <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
          <Image source ={house} style={{width: 25,height: 25,borderRadius:15,bottom:-20,marginLeft:1}}></Image> 
          </TouchableOpacity>
          <Image source ={connexion} style={{width: 25,height: 25,borderRadius:12,bottom:-20,marginLeft:120}}></Image> 
          <TouchableOpacity onPress={()=> navigation.navigate('Categorie')}>
          <Image source ={panier} style={{width: 25,height: 25,borderRadius:15,bottom:-20,marginLeft:120}}></Image> 
          </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  cont5:{
    position:'relative',
    height:80,
    width:150,
    borderWidth:1,
    borderColor:'orange',
    bottom:50,
    right:-205,
    borderRadius:14,
  },
  cont4:{
    position:'relative',
height:80,
width:190,
borderWidth:1,
borderColor:'orange',
bottom:-30,
left:10,
borderRadius:14,
  },


container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:100,
    width:400,
    marginLeft:"auto",
    marginRight:"auto",
    backgroundColor:'white',
    borderRadius:18,

  }
  });