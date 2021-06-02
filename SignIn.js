import React, { useState } from 'react'
import { View, TextInput,Button,Text,Alert, StyleSheet, Dimensions,Image, TouchableOpacity, Platform, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../actions/auth-actions'
import Form from 'react-native-form'
import {LinearGradient} from 'expo-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'
//import {AsyncStorage} from "@react-native-community/async-storage"
//import { useStore } from 'react-redux'
const SignIn=({navigation,route})=> {
  let s1={j:'geuuj'}
  s1=route.params;
 console.log(s1)
  const [data,setData]=React.useState({
    email:'',
    password:'',
    check_textInputChange:false,
    secureTextEntry:true
  })

  const textInputChange=(val)=>{
    if(val.length !=0){
      setData({
        ...data,
        email:val,
        check_textInputChange:true
      })
    }else{
      setData({
        ...data,
        email:val,
        check_textInputChange:false
      })
    }
  }

  const handlePasswordChange=(val)=>{
    setData({
      ...data,
      password:val
    })
  }

  const updateSecureTextEntry=()=>{
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }
  console.log(data.email)
  console.log(data.password)
    //const job=route.params
     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')
    const [sign,setSign]=useState('false')
    //const [data,setData]=useState([])
    const [message,setMessage]=useState('')
    const [fail,setFail]=useState('')
    const dispatch=useDispatch()
    const auth=useSelector(state=>state.auth1)
    const user1={email,password}
    
    const loginUser=()=>{
      // setEmail(data.email)
      // setPassword(data.password)
      console.log("BUTTTTTT",data.email)
      let email=data.email
      let password=data.password
       // e.preventDefault()
        //const e=email.toLowerCase()
        //AsyncStorage.setItem('email1',email)
        const user={email,password}
        console.log(user)
        if(email=="" || password==""){
            setMessage("please enter a email and password")
        }else{
            dispatch(signin(user))
           setTimeout(()=>{
            return [navigation.navigate('signvalidation')]
          },500)
        }
    }
    // const dis=()=>{

    //  //const auth1=useSelector(state=>state.auth1)
    //   if(!auth.fail){
    //     console.log("component",auth.fail)
    //     setFail("invalid Email ID")
    //   }else{
    //     return [navigation.navigate('Details')]
    //   }
    //  }
    //console.log("signin",job)
    // if(sign==="true"){
    //     return [navigation.navigate('signup')]
    // }
    const sign1=()=>{
      let l={message:''}
        return [navigation.navigate('signup',l)]
    }
   //if(auth.authenticate){
      
   //}
    return (

     <View style={styles.container}>
       <StatusBar backgroundColor='#009387' barStyle='light-content' />
       <Icon name='arrow-back' size={25} color='white' onPress={()=>navigation.goBack()}/>
       <View style={styles.header}>
         <Text style={styles.text_header}>Welcome!</Text>
       </View>
       <Animatable.View animation='fadeInUpBig' 
        style={styles.footer}>

         <Text style={styles.text_footer}>Email</Text>
         <View style={styles.actions}>
           <FontAwesome name='user-o' color='#05375a' size={20} />
           <TextInput placeholder="Your Email"
           style={styles.textInput} 
           onChangeText={(val)=>textInputChange(val)}
           autoCapitalize='none'/>

           <Animatable.View animation='bounceIn' />
           {data.check_textInputChange ?
           <Feather name='check-circle' color='green' size={20} />
           : null }
         </View>
         <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
         <View style={styles.actions}>
           <FontAwesome name='lock' color='#05375a' size={20} />
           <TextInput placeholder="Your Password"
           secureTextEntry={data.secureTextEntry ? true : false}
           style={styles.textInput} 
           onChangeText={(val)=>handlePasswordChange(val)}
           autoCapitalize='none'/>
           <TouchableOpacity onPress={()=>updateSecureTextEntry()}>
             {data.secureTextEntry ? 
           <Feather name='eye-off' color='green' size={20} />
           :
           <Feather name='eye' color='green' size={20} />
             }
           </TouchableOpacity>
         </View>
         <View style={styles.button}>
          
             <LinearGradient
             colors={['#08d4c4','#01ab9d']}
             style={styles.signIn}
             >
                <TouchableOpacity onPress={()=>loginUser()}>
               <Text style={[styles.textSign,{color:'#fff'}]}
               
               >
                  Sign In
               </Text>
               </TouchableOpacity>
             </LinearGradient>
            
             <TouchableOpacity 
             onPress={()=>sign1()}
             style={[styles.signIn,{borderColor:'#009387',borderWidth:1,marginTop:15}]}
             >
               <Text style={[styles.textSign,{color:'#009387'}]}>
                  Sign Up
               </Text>

             </TouchableOpacity>
         </View>
         <Text style={{color:'red',marginTop:20,marginLeft:70}}>{s1.message}</Text>
       </Animatable.View>
     </View>
        
        
//              <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
//               <Icon name='arrow-back' size={28} onPress={()=>navigation.navigate('Details')}
//                style={{marginLeft:-380,marginTop:-280,marginBottom:300}} />
//              <View>
                
                
//                 <TextInput style={{height: 50,marginTop:-100, borderWidth:1,borderRadius:10,borderColor:'green',backgroundColor:'#F1F1F1',marginRight:60,
//                 marginLeft:60,width:250}} placeholder=" Enter Email"
//           onChangeText={email => setEmail(email)} defaultValue={email} />
//           <TextInput style={{height: 50,width:250,marginTop:20, borderWidth:1,borderRadius:10,borderColor:'green', backgroundColor:'#F1F1F1',marginLeft:60,
//           marginRight:60}} placeholder=" Enter password"
//           onChangeText={password => setPassword(password)} defaultValue={password} />
//  </View>
//  <View style={{marginTop:20,}}>
// <Button onPress={()=>loginUser()}  //color="#f194ff" 
// title='Signin'/>

// </View>
 
            
       
//         <View>
//     <Text style={{color:'blue',marginLeft:10,marginTop:20,marginBottom:20}}>Are you a new user ?</Text>
//       <Button onPress={()=>sign1()} title='signup' />
//     <View style={{marginTop:20}}>
    
//     </View>
// </View>

//         </View>
        
    )
}

export default SignIn
const {height}=Dimensions.get('screen')
const height_logo=height-600;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#009387'
  },
  header:{
    flex:1,
    justifyContent:'flex-end',                                
    paddingHorizontal:20,
    paddingBottom:50
  },
  text_header:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:20
  },
  text_footer:{
    color:'#05375a',
    fontSize:18
  },
  footer:{
    flex:3,
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:50,
    paddingHorizontal:30
  },
  logo:{
    width:height_logo,
    height:height_logo,
    borderRadius:20
  },
  title:{
    color:'#05375a',
    fontSize:30,
    fontWeight:'bold',
  },
  text:{
    color:'gray',
    marginTop:5
  },
  button:{
    alignItems:'flex-end',
    marginTop:30
  },
  signIn:{
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,

  },
  textSign:{
    fontSize:18,
    //color:'white',
    fontWeight:'bold'
  },
  actions:{
    flexDirection:'row',
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2',
    paddingBottom:5
  },
  textInput:{
    flex:1,
    marginTop:Platform.OS=== 'ios' ? 0 : -12,
    paddingLeft:10,
    color:'#05375a'
  }

})