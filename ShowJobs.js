import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity,Dimensions, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useSelector } from 'react-redux';
import axiosInstance from '../helpers/axios';
import * as Share from 'expo-sharing';
const height=Dimensions.get('window').height/4;
const width=Dimensions.get('window').width-40
const styles=StyleSheet.create({
    card:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 62,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10.00,
        
        elevation: 6,
        //height: 235,
         backgroundColor: '#f1f1f1', 
        height,width,
         marginHorizontal: 20,marginRight:10, 
        borderRadius: 10, marginBottom: 20, padding: 15, 
       
    }
})
const ShowJobs=({plant,navigation})=> {

// const share=async()=>{
//     let result=await Share.isAvailableAsync('hello')

//     if(result){
//         Share.shareAsync(result,{data:'hello'})
//     }
// }

    //const profileShare=()=>{

        // const myCustomerShare=async()=>{
        //   const shareOption={
        //     message:'this is text message'
        //   }
        //   try{
        //     const shareRessponse= await Sharing.isAvailableAsync({message:'this is text message'}

        //     )
            
        //   }catch(error){
        //     console.log(error)
        //   }
        // }
     // }
    const [fav,setFav]=useState('')
    const [col,setCol]=useState('red')
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
           console.log("job details",item)
           console.log("Email id",seekerEmail)
           console.log("job id",jobid)
         await axiosInstance.post('/savejobs',{...item,seekerEmail,jobid})
          .then(res=>console.log('saved'))
          .catch(err=>console.log(err))
        setFav('saved successfully...!')
        setMessage('')
        setCol('green')
    }}
    return (
        // <ScrollView>
        <View  style={[styles.card,] }>
        
    <View style={{flexDirection:'row'}}>
            <Text style={{color:'green',fontSize:15}}>{fav}</Text>
            <Text style={{color:'red'}}>{message}</Text>
             <FontAwesome
        name="heart" 
        size={18} style={{marginLeft:0,}} onPress={()=>saving(plant)}
        color={col}       />
        </View>
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
        <Text style={{fontSize:16,fontWeight:'bold',color:'#009387'}}>Job name:{plant.jobtitle}</Text>
        <Text style={{fontSize:16,color:'#009387'}}>Company :{plant.companyname} </Text>
        <Text style={{fontSize:16,color:'#009387'}}>Loc :{plant.location}</Text>
        </View>
        <View>
            
        </View>
        </View>

        
        </TouchableOpacity>
        {/* <FontAwesome name='share' color='green' size={25} ma
            onPress={()=>share()} /> */}
</View>
// </ScrollView>
    )
}

export default ShowJobs
