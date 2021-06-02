// import React from 'react'
// import { View, Text, Button, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
//import { useState } from 'react'
//import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { updatejobseeker } from '../actions/auth-actions';




import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,Platform
} from 'react-native';

import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated, { set } from 'react-native-reanimated';

//import ImagePicker from 'react-native-image-crop-picker';




const Update=({navigation,route})=> {
    // renderInner = () =>(
    //     <Text>Hello</Text>
    // )
    //  renderHeader=()=>(
    //     <View style={styles.header}>
    //         <View style={styles.panelHeader}>
    //             <View style={styles.panelHandle}></View>
    //         </View>
    //     </View>
    // )
  let  renderInner = () =>(
    <View style={styles.panel}>
    <View style={{alignItems: 'center'}}>
      <Text style={styles.panelTitle}>Upload Photo</Text>
      <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
    </View>
    <TouchableOpacity style={styles.panelButton}>
      <Text style={styles.panelButtonTitle}>Take Photo</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.panelButton} >
      <Text style={styles.panelButtonTitle}>Choose From Library</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.panelButton}
      onPress={()=>bs.current.snapTo(1)}>
      <Text style={styles.panelButtonTitle}>Cancel</Text>
    </TouchableOpacity>
  </View>
    )
  let   renderHeader=()=>(
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    )
    
        let bs=React.createRef();
       let fall=new Animated.Value(1);
    

   // 


    const data=route.params
    //const [data,setData]=useState([])
    const [email,setEmail]=useState(data.email)
    const [fullname,setFullname]=useState(data.fullname)
    const [phone,setPhone]=useState(data.phone)
    const [qualification,setQualification]=useState(data.qualification)
    const [stream,setStream]=useState(data.stream)
    const [skill,setSkills]=useState(data.skills)
    const [exp,setExp]=useState(data.exp)
    const [locations,setLocation]=useState(data.location)
    const [message,setMessage]=useState('')
    const auth=useSelector(state=>state.auth1)
    const dispatch=useDispatch()

    const updating=()=>{
        const skills=skill.toLowerCase()
        const location=locations.toLowerCase()
        if(fullname==""||phone==""||qualification==""||stream==""||
        skills==""||exp==""||location==""){
            setMessage("please enter data")
        }else{
           
            const user={fullname,email,phone,qualification,stream,skills,exp,location}
            console.log("component",user)
            dispatch(updatejobseeker(user,data._id))
            setMessage('updated successfully...!')
            clear()
            // setTimeout(()=>{
            //   return [navigation.navigate('Signin')]
            // },1000)
           //return [navigation.navigate('profile')]
        }
    }
    const clear=()=>{
      setExp('')
      setEmail('')
      setFullname('')
      setLocation('')
      setSkills('')
      setStream('')
      setPhone('')
      setQualification('')
    }
   
    return (


        <View style={styles.container}>
          <Icon name='arrow-left' size={25} color='white' onPress={()=>navigation.goBack()} />
            <BottomSheet
        ref={bs}
        snapPoints={[330,0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
            <View style={{margin:20}}>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>bs.current.snapTo(0)}>
                        <View style={{
                            height:100,
                            width:100,
                            borderRadius:15,
                            justifyContent:'center',
                            alignItems:'center'
                        }}>

                            <ImageBackground source={require('../assets/1.jpg')}
                            style={{height:100,width:100}}
                            imageStyle={{borderRadius:15}}
                            >

                                <View style={{
                                    flex:1,
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}>
                                    <Icon name='camera' size={35} color="#fff" style={{
                                        opacity:0.9,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        borderWidth:1,
                                        borderColor:'#fff',
                                        borderRadius:10,
                                    }} />

                                </View>
                            </ImageBackground>
                            
                        </View>
                    </TouchableOpacity>
                        <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>{fullname}</Text>
                </View>
                <View style={styles.action}>
                    <FontAwesome name='user-o' size={20} color='white' />
                    <TextInput style={styles.textInput} defaultValue={fullname}
                    
             onChangeText={fullname=>setFullname(fullname)}/>

                </View>
                <View style={styles.action}>
                    <FontAwesome name='phone' size={20} color='white' />
                    <TextInput style={styles.textInput}
                    keyboardType='number-pad'
                    defaultValue={phone}
                     
             onChangeText={phone=>setPhone(phone)}/>

                </View>
                <View style={styles.action}>
                    <FontAwesome name='book' size={20} color='white' />
                    <TextInput style={styles.textInput} defaultValue={qualification}
                     
             onChangeText={qualification=>setQualification(qualification)}/>

                </View>
                <View style={styles.action}>
                    <Icon name='book-open' size={20} color='white' />
                    <TextInput style={styles.textInput} defaultValue={stream}
                     
             onChangeText={stream=>setStream(stream)}/>

                </View>
                <View style={styles.action}>
                    <Icon name='seat-individual-suite' size={20} color='white' />
                    <TextInput style={styles.textInput} defaultValue={skill}
                     
             onChangeText={skill=>setSkills(stream)}/>

                </View>

                <View style={styles.action}>
                    <Icon name='expansion-card' size={20} color='white' />
                    <TextInput style={styles.textInput} defaultValue={exp}
                     
             onChangeText={exp=>setExp(exp)}/>

                </View>

                <View style={styles.action}>
                    <Icon name='map-marker' size={20} color='white' />
                    <TextInput style={styles.textInput} defaultValue={locations}
                     
             onChangeText={locations=>setLocation(locations)}/>

                </View>
                                    <Text style={{color:'yellow'}}>{message}</Text>
                <TouchableOpacity style={styles.commandButton} onPress={()=>updating()}>
                                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>











    //     <View style={{ flex: 1,marginTop:0}}>
            
    //     <View style={{flexDirection:'row',marginHorizontal:10,marginTop:10,
    //     justifyContent:'space-between'}}>
    //         <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} />
    //         {/* <Button onPress={()=>logout()} title="logout" /> */}
    //         </View>
    //         <View style={{flex:1,alignItems:'center',justifyContent:'center'}}> 
    //         <Text style={{fontSize:20,fontWeight:'bold',
    //     marginLeft:0,marginBottom:10}}>Chek your details :</Text>
    //         <View style={{flexDirection:'row'}}>
    //         {/* <Text style={{marginTop:8}}>FullName :</Text> */}
    //         <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
    //         placeholder='enter your name' defaultValue={fullname}
    //          onChangeText={fullname=>setFullname(fullname)} />
    //     </View>
    //     {/* <View style={{flexDirection:'row',marginTop:10,marginLeft:25}}>
    //         <Text style={{marginTop:8}}>Email :</Text>
    //         <TextInput style={{height:40,width:200,backgroundColor:'#F1F1F1'}} 
    //         placeholder='enter your email' defaultValue={email}
    //          onChangeText={email=>setEmail(email)} />
    //     </View> */}
    //     {/* <View style={{flexDirection:'row',marginTop:10}}>
    //         <Text style={{marginTop:8}}>Password :</Text>
    //         <TextInput style={{height:40,width:200,backgroundColor:'#F1F1F1'}} 
    //         placeholder='enter your name' defaultValue={password}
    //          onChangeText={password=>setPassword(password)} />
    //     </View> */}
    //     <View style={{flexDirection:'row',marginTop:10,marginLeft:0}}>
    //         {/* <Text style={{marginTop:8}}>Phone :</Text> */}
    //         <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
    //         placeholder='enter your phone' defaultValue={phone}
    //          onChangeText={phone=>setPhone(phone)} />
    //     </View>
    //     <View style={{flexDirection:'row',marginTop:10,marginLeft:0}}>
    //         {/* <Text style={{marginTop:8}}>Qualification :</Text> */}
    //         <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
    //         placeholder='enter your qualification' defaultValue={qualification}
    //          onChangeText={qualification=>setQualification(qualification)} />
    //     </View>
    //     <View style={{flexDirection:'row',marginTop:10,marginLeft:0}}>
    //         {/* <Text style={{marginTop:8}}>Stream :</Text> */}
    //         <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
    //         placeholder='enter your stream' defaultValue={stream}
    //          onChangeText={stream=>setStream(stream)} />
    //     </View>
    //     <View style={{flexDirection:'row',marginTop:10,marginLeft:0}}>
    //         {/* <Text style={{marginTop:8}}>skills :</Text> */}
    //         <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
    //         placeholder='enter your skills'defaultValue={skill}
    //          onChangeText={skill=>setSkills(skill)} />
    //     </View>
    //     <View style={{flexDirection:'row',marginTop:10,marginLeft:0}}>
    //         {/* <Text style={{marginTop:8}}>Experience :</Text> */}
    //         <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
    //         placeholder='enter your experience' defaultValue={exp}
    //          onChangeText={exp=>setExp(exp)} />
    //     </View>
    //     <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
    //         {/* <Text style={{marginTop:8}}>Location :</Text> */}
    //         <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
    //         placeholder='enter your location'defaultValue={locations}
    //          onChangeText={locations=>setLocation(locations)} />
    //     </View>
    //    {/* <View style={{marginTop:30,marginLeft:20 ,flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between'}}>
           
    //        <Button  title="back" onPress={()=>navigation.navigate('Details')}/>
    //        <View style={{marginLeft:50}}>
    //        <Button  title="submit" onPress={()=>register()}/>
    //        </View>
    //    </View> */}
    //    <View>
    //        <Button onPress={()=>updating()} title="update" />
    //    </View>
    //    </View>
    //      </View>
    
    )
}

export default Update

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#009387'
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 2,
      borderBottomColor: 'white',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: 'white',
      textDecorationLine:'none'
    },
  });