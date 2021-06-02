import React, { useState } from 'react'
import { View, Text,Dimensions,StyleSheet,TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {LinearGradient} from 'expo-linear-gradient'
import axiosInstance from '../helpers/axios';
const width=Dimensions.get('window').width-20;

const styles=StyleSheet.create({
    card:{
        height: 225, backgroundColor: '#F1F1F1', 
        width, marginHorizontal: 10,
        borderRadius: 10, marginBottom: 20, padding: 15, 
       
    }, title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold',
      },
      button:{
        alignItems:'flex-end',
        marginTop:30
      },
      signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
      },
      textSign:{
        color:'white',
        fontWeight:'bold'
      }
})
const Save1 = ({plant,navigation}) => {
const [hh,setHh]=useState('')
  const dele=async(id)=>{
   await axiosInstance.delete(`/deleteSavedjob/${id}`).then(res=>res.data)
   .catch(err=>console.log(err))
    setHh('job deleted...')
   setTimeout(()=>{
     return [navigation.navigate('Saved Jobs')]
   },500)
  }
    return (
        <View style={styles.card}>
            <Text style={{fontSize:18,color:'#009387'}}>Name: {plant.jobtitle}</Text>
            <Text>Company :{plant.companyname}</Text>
            <Text>Description :{plant.description}</Text>
            
            <View style={styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('Details',plant)}>
          <LinearGradient
          colors={['#08d4c4', '#01ab9d']}
          style={styles.signIn}
          >
            <Text style={styles.textSign}>Apply</Text>
            <MaterialIcons  name='navigate-next' color='#fff'
            size={20}/>
          </LinearGradient>
        </TouchableOpacity>
        </View>
        <View style={styles.button}>
        <TouchableOpacity onPress={()=>dele(plant._id)}>
          <LinearGradient
          colors={['red','green' ]}
          style={styles.signIn}
          >
            <Text style={styles.textSign}>Delete</Text>
            <MaterialIcons  name='navigate-next' color='#fff'
            size={20}/>
          </LinearGradient>
        </TouchableOpacity>
        </View>
        <Text style={{color:"red"}}>{hh}</Text>
        </View>
    )
}

export default Save1
