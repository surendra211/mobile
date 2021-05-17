import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity,Dimensions, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux';
import axiosInstance from '../helpers/axios';

const width=Dimensions.get('window').width/2-30;
const styles=StyleSheet.create({
    card:{
        height: 235, backgroundColor: '#F1F1F1', 
        width, marginHorizontal: 20,marginRight:10, 
        borderRadius: 10, marginBottom: 20, padding: 15, 
       
    }
})
const ShowJobs=({plant,navigation})=> {
    const [fav,setFav]=useState('')
    const auth=useSelector(state=>state.auth1)
    const [message,setMessage]=useState('')
    const saving=async(item)=>{
        const seekerEmail=auth.email1
        const jobid=item._id
        //let item1={item,seekerEmail:auth.email1}
       // console.log(item1)
       if(seekerEmail==""){
        setMessage("please Signin  your account")
       }else{ 
         await axiosInstance.post('/savejobs',{...item,seekerEmail,jobid}).then(res=>console.log('saved'))
        .catch(err=>console.log(err))
        setFav('saved successfully')
        setMessage('')
    }}
    return (
        // <ScrollView>
        <View  style={styles.card }>
        
    
            <Text style={{color:'green',fontSize:10}}>{fav}</Text>
            <Text style={{color:'red'}}>{message}</Text>
             <Icon
        name="favorite"
        size={18} style={{marginLeft:110,}} onPress={()=>saving(plant)}
        color='green'       />
        
        <TouchableOpacity 
        activeOpacity={0.8} onPress={()=>navigation.navigate('Details',plant)}>
        <View>
        <View style={{alignItems: 'flex-end'}}>
        <View
        style={{ 
        width: 30, 
        height: 30, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
       
        }}>
       
        
        </View>
        </View>
        <View key={plant.name}>
        <Text style={{fontSize:16,fontWeight:'bold',color:'green'}}>Job name:{plant.jobtitle}</Text>
        <Text style={{fontSize:16}}>Company :{plant.companyname} </Text>
        <Text style={{fontSize:16}}>Loc :{plant.location}</Text>
        </View>
        </View>
        </TouchableOpacity>



</View>
// </ScrollView>
    )
}

export default ShowJobs
