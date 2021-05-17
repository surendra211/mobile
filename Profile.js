import React, { useEffect, useState } from 'react'
import { View, Text,Button, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import axiosInstance from '../helpers/axios'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Profile = ({navigation}) => {
const [view1,setView1]=useState([])
const [message,setMessage]=useState('')
const auth=useSelector(state=>state.auth1)


    useEffect(()=>{
        const profi=async()=>{
        if(auth.email1==''){
            setMessage('Please Signin Your Account you can see your Profile')
            }else{ 
        
            const resp=await axiosInstance.get(`/jobseekerdetails/${auth.email1}`)
            setView1(resp.data)
        }
        }
        profi()
    },[])
    console.log(auth.email1)
    console.log(view1)
    return (
        <SafeAreaView style={{ flex: 1, 
            backgroundColor: 'white'}}>
        <View style={{backgroundColor:'purple', height:50, alignItems:'center',flexDirection:'row'}}>
 <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} color='white' /> 
        <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:0,
       marginLeft:10}}>Profile</Text>
       {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
             onPress={()=>navigation.navigate('signin')}>signin</Text> */}
    </View>
        <View style={{ backgroundColor:'#F1F1F1'}}>
  
              
             <View style={{ backgroundColor:'white',marginTop:50,marginHorizontal:10,borderRadius:10,
           shadowColor: "#000",
           shadowOffset: {
             width: 0,
             height: 12,
           },
           shadowOpacity: 0.58,
           shadowRadius: 16.00,
           
           elevation: 24,
            //  shadowColor: '#000',
            //  shadowOffset: { width: 0, height: 1 },
            //  shadowOpacity: 0.8,
            //  shadowRadius: 1,  
        //      borderColor:'yourchoice', // if you need 
        //      borderWidth:1, overflow: 'hidden',
        // shadowColor: 'green',
        // shadowRadius: 10,
        // shadowOpacity: 1,
            }}>
        <View style={{backgroundColor:'purple', height:50,borderRadius:10,
         alignItems:'center',flexDirection:'row',}}>
 {/* <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} color='white' />  */}
        <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:0,
       marginLeft:10}}>check your Details</Text>
       {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
             onPress={()=>navigation.navigate('signin')}>signin</Text> */}
    </View>
            <View style={{marginLeft:30,}}>
            <Text style={{fontSize:16,fontWeight:'bold',}}>Name: {view1.fullname} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Email : {view1.email}</Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>phone : {view1.phone} </Text>
            
            <Text style={{fontSize:16,fontWeight:'bold'}}>Qualification : {view1.qualification} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Stream : {view1.stream} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Experience : {view1.exp} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Skills : {view1.skills} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>location : {view1.location} </Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>UpdatedAt : {view1.updatedAt} </Text>
            
            </View >
            <View style={{marginLeft:200,marginRight:50}}>
            <Button title='edit' color="#841584" onPress={()=>navigation.navigate('update',view1)}></Button>
            </View>
        </View>
        </View>
        <View style={{marginTop:60,marginLeft:30}}>
            <Text style={{color:'red'}}>{message}</Text>
        </View>
        </SafeAreaView>
    )
}

export default Profile
