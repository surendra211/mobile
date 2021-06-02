import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/auth-actions';
const Logout = ({navigation}) => {
    const auth=useSelector(state=>state.auth1)
    const [message,setMessage]=useState()
    const dispatch=useDispatch()
    const m={message:''}
    useEffect(()=>{
        const log=()=>{ 
    if(!auth.authenticate){ 
        return [navigation.navigate('Home')]
    }else{
        dispatch(signout())
    setMessage("logout successfully...")
        
    }
        }
        log()
},[])
    return (
        <View>
        <View style={{marginTop:0}}>
            <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} /> 
            <Text style={{color:'red',marginTop:30,marginLeft:130,marginBottom:50}}>{message} </Text>
            </View>
            {/* <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:300}}> */}
            
            
            {/* </View> */}
            <View >
            <Button title='signin' color='#009387' onPress={()=>navigation.navigate('signin',m)}/>
            </View>
            </View>
    )
}

export default Logout
