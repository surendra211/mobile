import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { updatejobseeker } from '../actions/auth-actions';
const Update=({navigation,route})=> {
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
          // return [navigation.navigate('Apply')]
        }
    }

    return (
        <View style={{ flex: 1,marginTop:0}}>
            
        <View style={{flexDirection:'row',marginHorizontal:10,marginTop:10,
        justifyContent:'space-between'}}>
            <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} />
            {/* <Button onPress={()=>logout()} title="logout" /> */}
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}> 
            <Text style={{fontSize:20,fontWeight:'bold',
        marginLeft:0,marginBottom:10}}>Chek your details :</Text>
            <View style={{flexDirection:'row'}}>
            {/* <Text style={{marginTop:8}}>FullName :</Text> */}
            <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder='enter your name' defaultValue={fullname}
             onChangeText={fullname=>setFullname(fullname)} />
        </View>
        {/* <View style={{flexDirection:'row',marginTop:10,marginLeft:25}}>
            <Text style={{marginTop:8}}>Email :</Text>
            <TextInput style={{height:40,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder='enter your email' defaultValue={email}
             onChangeText={email=>setEmail(email)} />
        </View> */}
        {/* <View style={{flexDirection:'row',marginTop:10}}>
            <Text style={{marginTop:8}}>Password :</Text>
            <TextInput style={{height:40,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder='enter your name' defaultValue={password}
             onChangeText={password=>setPassword(password)} />
        </View> */}
        <View style={{flexDirection:'row',marginTop:10,marginLeft:0}}>
            {/* <Text style={{marginTop:8}}>Phone :</Text> */}
            <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder='enter your phone' defaultValue={phone}
             onChangeText={phone=>setPhone(phone)} />
        </View>
        <View style={{flexDirection:'row',marginTop:10,marginLeft:0}}>
            {/* <Text style={{marginTop:8}}>Qualification :</Text> */}
            <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder='enter your qualification' defaultValue={qualification}
             onChangeText={qualification=>setQualification(qualification)} />
        </View>
        <View style={{flexDirection:'row',marginTop:10,marginLeft:0}}>
            {/* <Text style={{marginTop:8}}>Stream :</Text> */}
            <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder='enter your stream' defaultValue={stream}
             onChangeText={stream=>setStream(stream)} />
        </View>
        <View style={{flexDirection:'row',marginTop:10,marginLeft:0}}>
            {/* <Text style={{marginTop:8}}>skills :</Text> */}
            <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder='enter your skills'defaultValue={skill}
             onChangeText={skill=>setSkills(skill)} />
        </View>
        <View style={{flexDirection:'row',marginTop:10,marginLeft:0}}>
            {/* <Text style={{marginTop:8}}>Experience :</Text> */}
            <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder='enter your experience' defaultValue={exp}
             onChangeText={exp=>setExp(exp)} />
        </View>
        <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
            {/* <Text style={{marginTop:8}}>Location :</Text> */}
            <TextInput style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder='enter your location'defaultValue={locations}
             onChangeText={locations=>setLocation(locations)} />
        </View>
       {/* <View style={{marginTop:30,marginLeft:20 ,flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between'}}>
           
           <Button  title="back" onPress={()=>navigation.navigate('Details')}/>
           <View style={{marginLeft:50}}>
           <Button  title="submit" onPress={()=>register()}/>
           </View>
       </View> */}
       <View>
           <Button onPress={()=>updating()} title="update" />
       </View>
       </View>
         </View>
    
    )
}

export default Update
