import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput,ScrollView } from 'react-native'
import React , {useState}from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import FruitCardSales from '../components/fruitCardSales';
import CatCard from '../components/CatCard';
import { CategoriesCart, CategoriesFruits, categories } from '../constants';
import chien from '../assets/images/chien.jpg';
import loupe from '../assets/images/loupe.png';
import plus from '../assets/images/plus.png';
import panierFruit from '../assets/images/panierFruit.png';
import house from '../assets/images/house.png';
import panier from '../assets/images/panier.png';
import connexion from '../assets/images/connexion.png';

  
export default function CategorieScreen(props) {
    const navigation = useNavigation();
    const [value, setValue] = useState('');
  return (
    <SafeAreaView  className="flex-1 white">
     
        <View styles={styles.container}>
        <View style={{opacity:0.5,marginLeft: 20}}><Text>Your Location</Text></View>
        <View style={styles.header}>
        <View><Text style={styles.boxOne}>3892 Olen Thomas Drive, NY</Text></View>
        <View><Image source ={chien} style={styles.boxTwo}></Image></View>
        </View>

      
          
        
    
        <View style={styles.header}>
        
        <View style={styles.search}>
        <Image source={loupe} style={{width: 20 , height:20,alignItems:'center'}}></Image>
            <TextInput
            style={{width: '70%', borderWidth: 0, marginLeft: 1, fontSize: 16 }}
            onChangeText={text => setValue(text)}
            value={value}  placeholder='Search' 
          />         
      </View> 
      <View style={styles.boxTwo1}>
      
          <Image source ={plus} style={{width: 27,marginRight: 10,height: 27,borderRadius:18,top:1}}></Image> 
        
        </View>
        </View>
        <View className="navbar mx-5 flex-row justify-between items-center">
          <View><Text style={{fontWeight:'bold',fontSize:17,top:35}}>categories</Text></View>    
          <View style={{top:35}}><Text style={{color:'#457E79'}}>See all</Text></View> 
        </View>
        </View>

        <View className="mt-8 pl-5 space-y-1">
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{overflow: 'visible'}}>
          {
            [...CategoriesFruits].reverse().map((fruit, index)=>{
              return (
                <FruitCardSales key={index} fruit={fruit} />
              );
            })
          }
        </ScrollView>
        
      </View>

      <View className="navbar mx-5 flex-row justify-between items-center">
          <View><Text style={{fontWeight:'bold',fontSize:17,top:35}}>Deals</Text></View>    
          <View style={{top:35}}><Text style={{color:'#457E79'}}>See all</Text></View> 
        </View>

        <View style={{width:320, height:150,backgroundColor: '#B2DFDB',top:45,marginLeft:20,borderRadius:5}}>

        <View style={styles.headerOne}>
        <View>
            <View style={styles.appointments}>
                <View style={styles.number}><Text style={{fontSize: 30, fontWeight:'bold',marginLeft:-30,top:10}}>50% OFF</Text></View>
               
            </View>
            <Text style={{top:10}}>On Grocery Combo packs</Text>
            <View style={{top:40,width:70,height:25,backgroundColor: 'white',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#457E79',top:2}}>Shop now</Text>
            </View>
        </View> 
        <View style={styles.add}>
          <Image source={panierFruit} style={{width: 100, height:100,marginRight: -2,marginTop: 25}}></Image>
          </View>
      </View>
        </View>
        <View style={{top:15}} className="navbar mx-5 flex-row justify-between items-center">
          <View><Text style={{fontWeight:'bold',fontSize:17,top:35}}>Popular</Text></View>    
          <View style={{top:35}}><Text style={{color:'#457E79'}}>See all</Text></View> 
        </View>
<View style={{top:25}}>
        <View  className="carousel mt-8">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              CategoriesCart.map((fruit, index)=>{
                return (
                  <CatCard fruit={fruit} key={index} />
                )
              })
            }
          </ScrollView>
        </View>
        </View>
        <View style={{top:18}}>
        <View className="navbar mx-5 flex-row justify-between items-center">
          <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
          <Image source ={house} style={{width: 25,height: 25,borderRadius:12,bottom:-20}}></Image> 
          </TouchableOpacity>
          <Image source ={connexion} style={{width: 25,height: 25,borderRadius:12,bottom:-20}}></Image> 
          <TouchableOpacity onPress={()=> navigation.navigate('Categorie')}>
          <Image source ={panier} style={{width: 25,height: 25,borderRadius:12,bottom:-20}}></Image> 
          </TouchableOpacity>
        </View>
        </View>
        </SafeAreaView>

        
    
  )
}


const styles = StyleSheet.create({
    search:{
        width: 270,
        height:40,
        backgroundColor: "#fff",
        top:15,
        marginLeft: 20,
        borderRadius: 20,
        display: 'flex',
        alignItems:'center',
        alignContent:'center',
        flexDirection: 'row',
          },
          container: {
            flex: 1,
            backgroundColor: '#f2f3f5',
            alignItems: 'center',
            justifyContent: 'center',
           
          },
          header: {
            
            position: 'relative',
            
           // bottom: 300,
           display: 'flex',
           flexDirection: 'row',
           justifyContent: 'space-between',
        
          },
          boxOne:{
            
          
            alignItems: 'center',
            marginLeft: 20,
            fontWeight:'bold',
            paddingTop: -19,
            borderRadius: 50
          },
          boxTwo:{
            backgroundColor: '#457E79',
            width: 30,
            height: 30,
            alignItems: 'center',
            marginRight: 20,
            Top:-10,
            borderRadius: 10
          },
          boxTwo1:{
            backgroundColor: '#4DB6AC',
            width: 45,
            height: 40,
            justifyContent:'center',
            alignItems: 'center',
            marginRight: 15,
            top:15,
            borderRadius: 15
          },
          headerOne:{
            width: '100%',
            Top: 25,
            //backgroundColor: 'red',
            display: 'flex',
        
            borderRadius:10,
            flexDirection: 'row',
            justifyContent: 'space-around',
        
          },
          appointments:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
          number:{
            float: 'left',
            marginLeft:-10
          },
});