import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/auth-actions';
const Logout = ({navigation}) => {
    const auth=useSelector(state=>state.auth1)
    const [message,setMessage]=useState()
    const dispatch=useDispatch()

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
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:300}}>
            <Text style={{color:'red',marginTop:30}}>{message} </Text>
            </View>
            </View>
    )
}

export default Logout
