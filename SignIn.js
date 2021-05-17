import React, { useState } from 'react'
import { View, TextInput,Button,Text,Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../actions/auth-actions'
import Form from 'react-native-form'
//import Icon from 'react-native-vector-icons/MaterialIcons'
//import {AsyncStorage} from "@react-native-community/async-storage"
//import { useStore } from 'react-redux'
const SignIn=({navigation})=> {
    //const job=route.params
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [sign,setSign]=useState('false')
    const [data,setData]=useState([])
    const [message,setMessage]=useState('')
    const dispatch=useDispatch()
    const auth=useSelector(state=>state.auth1)
    const user1={email,password}
    
    const loginUser=()=>{
       // e.preventDefault()
        //const e=email.toLowerCase()
        //AsyncStorage.setItem('email1',email)
        const user={email,password}
        if(email=="" || password==""){
            setMessage("please enter a email and password")
        }else{
            dispatch(signin(user))
            return [navigation.navigate('Details')]
        }
    }
    //console.log("signin",job)
    // if(sign==="true"){
    //     return [navigation.navigate('signup')]
    // }
    const sign1=()=>{
        return [navigation.navigate('signup')]
    }
   //if(auth.authenticate){
      
   //}
    return (
        
        // <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
        //       <Icon name='arrow-back' size={28} onPress={()=>navigation.goBack()}
        //        style={{marginLeft:30,marginTop:200,marginBottom:10}} />
        //      <View >
             <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
              <Icon name='arrow-back' size={28} onPress={()=>navigation.navigate('Details')}
               style={{marginLeft:-380,marginTop:-280,marginBottom:300}} />
             <View>
                
                {/* <Form onSubmit={loginUser}> */}
                <TextInput style={{height: 50,marginTop:-100, borderWidth:1,borderRadius:10,borderColor:'green',backgroundColor:'#F1F1F1',marginRight:60,
                marginLeft:60,width:250}} placeholder=" Enter Email"
          onChangeText={email => setEmail(email)} defaultValue={email} />
          <TextInput style={{height: 50,width:250,marginTop:20, borderWidth:1,borderRadius:10,borderColor:'green', backgroundColor:'#F1F1F1',marginLeft:60,
          marginRight:60}} placeholder=" Enter password"
          onChangeText={password => setPassword(password)} defaultValue={password} />
 </View>
 <View style={{marginTop:20,}}>
<Button onPress={()=>loginUser()}  //color="#f194ff" 
title='Signin'/>

</View>
 {/* <View style={{ flexDirection: 'row',
    justifyContent: 'space-between',}}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
  */}
{/* </Form>  */}
            
       
        <View>
    <Text style={{color:'blue',marginLeft:10,marginTop:20,marginBottom:20}}>Are you a new user ?</Text>
    {/* <Button onPress={()=>setSign('true')} title="signUp"/> */}
  <Button onPress={()=>sign1()} title='signup' />
    <View style={{marginTop:20}}>
    
    </View>
</View>

        </View>
        
    )
}

export default SignIn
