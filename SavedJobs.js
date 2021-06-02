import React, { useEffect, useState } from 'react'
import { View, Text,FlatList, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import axiosInstance from '../helpers/axios'
import Save1 from './Save1'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
const SavedJobs = ({navigation}) => {
    const [data,setData]=useState([])
    const [message,setMessage]=useState('')
    const auth=useSelector(state=>state.auth1)
    const em=auth.email1
    useEffect(()=>{
        const getdata=async()=>{ 
        if(em==""){
            setMessage('please login your account you can see your saved jobs')
        }else{
        const resp=await axiosInstance.get(`/getsaved/${auth.email1}`)
       await setData(resp.data)
        }
    }
    getdata()
    },[])
    //console.log(data)
    return (
        <SafeAreaView style={{flex:1,
            backgroundColor:'white',marginLeft:10,
            marginRight:10}}>
        <View>
            <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} /> 
            <Text style={{color:'red',
             fontSize:16,fontWeight:'bold'}}>{message}</Text>

           <FlatList columnWrapperStyle=
        
        {{justifyContent:'space-between'}}
 showsVerticalScrollIndicator={true}
 contentContainerStyle={{marginTop:10,paddingBottom:0}}
  
 data={data} numColumns={2} 
 renderItem={({item}) => { 
 return <Save1 plant={item} navigation={navigation} />
 }}
 />
        </View>
        </SafeAreaView>
    )
}

export default SavedJobs
