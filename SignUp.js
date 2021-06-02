import React, { useCallback, useContext, useEffect, useState } from 'react'
import { View, Text, TextInput, Button,Dimensions,StyleSheet,StatusBar,
    Platform,   TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import {register1} from "../actions/auth-actions"
//import Pdf from 'react-native-pdf'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as DocumentPicker from 'expo-document-picker'
import * as ExpoFileSystem from 'expo-file-system'

import {LinearGradient} from 'expo-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'
//import {DocumentPicker} from "react-native-document-picker"
//import RNPickerSelect from "react-native-picker-select";
//import RNFetchBlob from "react-native-fetch-blob"
const {height}=Dimensions.get('screen')
const height_logo=height-600;
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'flex-start',
    //     alignItems: 'center',
    //     marginTop: 25,
    // },
    // searchContainer: { 
    //     height: 50, 
    //     backgroundColor: '#F1F1F1', 
    //     borderRadius: 10, 
    //     flex: 1, 
    //     flexDirection:'row', 
    //     alignItems: 'center'
    //     }, 
    //     searchContainer1: { 
    //         height: 50, 
    //         backgroundColor: '#F1F1F1', 
    //         borderRadius: 10, 
    //         flex: 1, 
    //         flexDirection:'row', 
    //         alignItems: 'center',
    //         marginTop:20
    //         }, 
    //     sortBtn: { 
    //         marginLeft: 10, 
    //         height: 50, 
    //         width: 50, 
    //         backgroundColor:'green', 
    //         justifyContent: 'center', 
    //         alignItems: 'center', 
    //         borderRadius: 10
    //         } ,
    // pdf: {
    //     flex:1,
    //     width:Dimensions.get('window').width,
    //     height:Dimensions.get('window').height,
    // }





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
        flex:5,
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
});
const SignUp=({navigation,route})=> {
let k=route.params



    const [data,setData]=React.useState({
        name:'',
        email:'',
        password:'',
        phone:'',
        qualification:'',
        stream:'',
        skill:'',
        experience:'',
        locations:'',
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
      const TextEntry=(val)=>{
        setData({
          ...data,
          name:val,
          secureTextEntry: !data.secureTextEntry
        })
      }
      const PhoneEntry=(val)=>{
        setData({
          ...data,
          phone:val,
          // secureTextEntry: !data.secureTextEntry
        })
      }
      const QualificationEntry=(val)=>{
        setData({
          ...data,
          qualification:val,
          secureTextEntry: !data.secureTextEntry
        })
      }
      const StreamEntry=(val)=>{
        setData({
          ...data,
          stream:val,
          secureTextEntry: !data.secureTextEntry
        })
      }
      const LocationEntry=(val)=>{
        setData({
          ...data,
          locations:val,
          secureTextEntry: !data.secureTextEntry
        })
      }
      const SkillsEntry=(val)=>{
        setData({
          ...data,
          skill:val,
          secureTextEntry: !data.secureTextEntry
        })
      }
      const ExperienceEntry=(val)=>{
        setData({
          ...data,
          experience:val,
          secureTextEntry: !data.secureTextEntry
        })
      }




    const source = {uri:'Downloads'}
    const dispatch=useDispatch()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [fullname,setFullname]=useState('')
    const [phone,setPhone]=useState('')
    const [qualification,setQualification]=useState('')
    const [stream,setStream]=useState('')
    const [skill,setSkills]=useState('')
    const [exp,setExp]=useState('')
    const [locations,setLocation]=useState('')
    const [file, setFile]=useState('')
    const [file1, setFile1]=useState('')
    const [mess,setMess]=useState('')
    const [mess1,setMess1]=useState('')
    const [avatar,setAvatar]=useState()
  const auth=useSelector(state=>state.auth1)
  const clear=()=>{
      setEmail("")
      setFullname('')
      setPhone('')
      setExp('')
      setSkills('')
      setQualification('')
      setLocation('')
      setStream('')
      setPassword('')
      setMess('Registerd successfully....')
      setMess1('Now you can SignIn')
  }
   const register=()=>{
       const fullname=data.name
       const email=data.email
       const password=data.password
       const qualification=data.qualification
       const phone=data.phone
       const exp=data.experience
       const stream=data.stream
      // e.preventDefault()
      const skills=data.skill.toLowerCase()
       const location=data.locations.toLowerCase()
    //   setSkills(d)
    //   setLocation(j)
     
    const  user={fullname,email,password,phone,qualification,stream,skills,exp,location,avatar}
//console.log("component",user)
       if(fullname=="" || email==""||password==""||phone==""||qualification==""||stream==""||
       skills==""||exp==""||location==""){
           setFile('please fill the form')
           
      }
      else if(avatar===undefined){
        console.log('hello')
        setFile1('select Resume')
        
      }else{
     const d={message:''}
     console.log(user)
       dispatch(register1(user))
       setTimeout(()=>{ setEmail('')
                 return [navigation.navigate('signupvalidation',d)]
       },500)
      

  }
    }
        //   if(auth.message=="registerd successfully....!"){
        //       setFile('now you can signin')
        //   }
        // setTimeout(()=>{
        //     if(auth.message=="registerd successfully....!"){
        //         console.log(auth.message)
        //         return [navigation.navigate('signin')]

        //     }
        // },1000)
    
   
//   if(auth.message=="registerd successfully....!"){
      
//       return [navigation.navigate('signin')]
//   }

// const documentSelect=async()=>{
//     try{
//         const res=await DocumentPicker.pick({
//             type:[DocumentPicker.types.pdf]
//         })
//         //const filename =res.uri.replace("file://","")
//         //let data=''
//         //RNFetchBlob.fs.readStream(filename,'base64')
//     }catch(err){
//         console.log(err)
//     }
// }

const pickFile=async()=>{
    let result=await DocumentPicker.getDocumentAsync({
        type:'*/*',copyToCacheDirectory:true})
    .then(response=>{
        if(response.type=='success'){
            let {name,size,uri}=response
            let nameParts=name.split('.')
            let fileType=nameParts[nameParts.length-1]
            //let headers=''
            var fileToUpload={
                name:name,
                size:size,
                uri:uri,
                type:"application/"+fileType
            }
            setAvatar(fileToUpload )
        }
    })
       // type:matchMedia =='application/pdf'
    //type:'application/pdf',

    
    
    // console.log(result)
    // if(result){
    //     setAvatar(result.uri)
   // }
    // const fileContent =  ExpoFileSystem.readAsStringAsync(result.uri);
    // const content = JSON.parse(fileContent);
   //setAvatar(content)
    console.log(avatar)
}
const postDocument = () => {
    const url = "http://192.168.1.100:6100/jobseeker";
    const fileUri = avatar.uri;
    const formData = new FormData();
    formData.append('document', avatar);
    const options = {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'file',
          'Content-Type': 'multipart/form-data',
        },
         
    };
 // const  user={fullname:fullname,email:email,password:password,
        // phone:phone,qualification:qualification,stream:stream,skills:skill,
        // exp:exp,location:locations,}
    console.log(formData);

    fetch(url, options).catch((error) => console.log(error));
}


useEffect(()=>{
  if(k.length !=0){
    setMess('')
    setMess1('')
    }
},[])
    return (
        <ScrollView>
 <View style={styles.container}>
       <StatusBar backgroundColor='#009387' barStyle='light-content' />
       <Icon name='arrow-back' size={25} color='white' onPress={()=>navigation.goBack()}/>
       <View style={styles.header}>
         <Text style={styles.text_header}>Register Here</Text>
       </View>
       <Animatable.View animation='fadeInUpBig' 
        style={styles.footer}>


<Text style={[styles.text_footer,]}>Name</Text>
         <View style={styles.actions}>
           <FontAwesome name='user-o' color='#05375a' size={20} />
           <TextInput placeholder="Your Name"
        //    secureTextEntry={data.secureTextEntry ? true : false}
           style={styles.textInput} 
           onChangeText={(val)=>TextEntry(val)}
           autoCapitalize='none'/>
           {/* <TouchableOpacity onPress={()=>TextEntry()}> */}
            
           <Feather name='check-circle' color='green' size={20} />
          
           {/* </TouchableOpacity> */}
         </View>


         <Text style={[styles.text_footer,{marginTop:35}]}>Email</Text>
         <View style={styles.actions}>
           <Feather name='mail' color='#05375a' size={20} />
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


        
<Text style={[styles.text_footer,{marginTop:35}]}>Phone</Text>
         <View style={styles.actions}>
           <FontAwesome name='mobile' color='#05375a' size={25} />
           <TextInput placeholder="Phone"
        //    secureTextEntry={data.secureTextEntry ? true : false}
           style={styles.textInput} 
           onChangeText={(val)=>PhoneEntry(val)}
           autoCapitalize='none' keyboardType='number-pad' />
           <TouchableOpacity onPress={()=>updateSecureTextEntry()} >
            
           <FontAwesome name='mobile' color='green' size={25} />
          
           </TouchableOpacity>
         </View>
         <Text style={[styles.text_footer,{marginTop:35}]}>Qualification</Text>
         <View style={styles.actions}>
           <FontAwesome name='id-card-o' color='#05375a' size={25} />
           <TextInput placeholder="Qualification"
        //    secureTextEntry={data.secureTextEntry ? true : false}
           style={styles.textInput} 
           onChangeText={(val)=>QualificationEntry(val)}
           autoCapitalize='none'/>
           <TouchableOpacity onPress={()=>updateSecureTextEntry()}>
            
           <FontAwesome name='id-card-o' color='green' size={25} />
          
           </TouchableOpacity>
         </View>

         <Text style={[styles.text_footer,{marginTop:35}]}>Stream</Text>
         <View style={styles.actions}>
           <FontAwesome name='id-card-o' color='#05375a' size={25} />
           <TextInput placeholder="Stream"
        //    secureTextEntry={data.secureTextEntry ? true : false}
           style={styles.textInput} 
           onChangeText={(val)=>StreamEntry(val)}
           autoCapitalize='none'/>
           <TouchableOpacity onPress={()=>updateSecureTextEntry()}>
            
           <FontAwesome name='id-card-o' color='green' size={25} />
          
           </TouchableOpacity>
         </View>

         <Text style={[styles.text_footer,{marginTop:35}]}>Skills</Text>
         <View style={styles.actions}>
           <FontAwesome name='language' color='#05375a' size={25} />
           <TextInput placeholder="Enter Skills"
        //    secureTextEntry={data.secureTextEntry ? true : false}
           style={styles.textInput} 
           onChangeText={(val)=>SkillsEntry(val)}
           autoCapitalize='none'/>
           <TouchableOpacity onPress={()=>updateSecureTextEntry()}>
            
           <FontAwesome name='language' color='green' size={25} />
          
           </TouchableOpacity>
         </View>

         <Text style={[styles.text_footer,{marginTop:35}]}>Experience</Text>
         <View style={styles.actions}>
           <FontAwesome name='language' color='#05375a' size={25} />
           <TextInput placeholder="Enter Exxperience"
        //    secureTextEntry={data.secureTextEntry ? true : false}
           style={styles.textInput} 
           onChangeText={(val)=>ExperienceEntry(val)}
           autoCapitalize='none'/>
           <TouchableOpacity onPress={()=>updateSecureTextEntry()}>
            
           <FontAwesome name='language' color='green' size={25} />
          
           </TouchableOpacity>
         </View>

         <Text style={[styles.text_footer,{marginTop:35}]}>Location</Text>
         <View style={styles.actions}>
           <FontAwesome name='map-marker' color='#05375a' size={25} />
           <TextInput placeholder="Enter Location"
        //    secureTextEntry={data.secureTextEntry ? true : false}
           style={styles.textInput} 
           onChangeText={(val)=>LocationEntry(val)}
           autoCapitalize='none'/>
           <TouchableOpacity onPress={()=>updateSecureTextEntry()}>
            
           <FontAwesome name='map-marker' color='green' size={25} />
          
           </TouchableOpacity>
         </View>
         <View style={{marginTop:20,borderRadius:20}}>
         <Button  title='select resume'onPress={()=>pickFile()} color='#009387'
         
         />
          <Text style={{color:'red'}}>{file1} </Text>
         </View>

             <Text style={{color:'red'}}>{k.message}</Text>
         {/* <Text style={{color:'green'}}>{mess} </Text>
         <Text style={{color:'green'}}>{mess1} </Text> */}
        
         <Text style={{color:'red'}}>{file} </Text>

         <View style={styles.button}>
          
             <LinearGradient
             colors={['#08d4c4','#01ab9d']}
             style={styles.signIn}
             >
                <TouchableOpacity onPress={()=>register()}>
               <Text style={[styles.textSign,{color:'#fff'}]}
               
               >
                  Register
               </Text>
               </TouchableOpacity>
             </LinearGradient>
            
             {/* <TouchableOpacity 
             onPress={()=>sign1()}
             style={[styles.signIn,{borderColor:'#009387',borderWidth:1,marginTop:15}]}
             >
               <Text style={[styles.textSign,{color:'#009387'}]}>
                  Sign Up
               </Text>

             </TouchableOpacity> */}
         </View>
       </Animatable.View>
     </View>
     </ScrollView>



//             {/* <View style={{backgroundColor:'purple', height:50, alignItems:'center',flexDirection:'row'}}>
//  <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} color='white' /> 
//         <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:0,
//        marginLeft:10}}>Register Screen</Text>
      
//     </View>
//         <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
//         <View>
//             <Text style={{color:'green',fontSize:25,marginLeft:0}}>Register Here</Text>
//             <Text style={{color:'red',marginLeft:30,marginBottom:10}}>{file}</Text>
//         </View>
       
//         <View style={{flexDirection:'row'}}>
           
//             <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
//             placeholder=' Enter your name'placeholderTextColor = "#9a73ef" defaultValue={fullname}
//              onChangeText={fullname=>setFullname(fullname)} />
//         </View>
//         <View style={styles.searchContainer1}>
        
         
//             <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
//             placeholder=' Enter your email' placeholderTextColor = "#9a73ef" defaultValue={email} textContentType='emailAddress'
//              onChangeText={email=>setEmail(email)} />
//         </View>
//         <View style={{flexDirection:'row',marginTop:20}}>
           
//             <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
//             placeholder=' Enter your password' placeholderTextColor = "#9a73ef" defaultValue={password} secureTextEntry={true}
//              onChangeText={password=>setPassword(password)} />
//         </View>
//         <View style={{flexDirection:'row',marginTop:20,marginLeft:0}}>
            
//             <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
//             placeholder=' Enter your phone' placeholderTextColor = "#9a73ef" defaultValue={phone} 
//              onChangeText={phone=>setPhone(phone)} />
//         </View>
//         <View style={{flexDirection:'row',marginTop:20,marginLeft:0}}>
          
//             <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
//             placeholder=' Enter your qualification' placeholderTextColor = "#9a73ef" defaultValue={qualification}
//              onChangeText={qualification=>setQualification(qualification)} />
//         </View>
//         <View style={{flexDirection:'row',marginTop:20,marginLeft:0}}>
           
//             <TextInput style={{height:50,borderWidth:1,borderColor:'green',
//             borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
//             placeholder=' Enter your stream'placeholderTextColor = "#9a73ef" defaultValue={stream}
//              onChangeText={stream=>setStream(stream)} />
//         </View>
//         <View style={{flexDirection:'row',marginTop:20,marginLeft:0}}>
           
//             <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
//             placeholder=' Enter your skills'placeholderTextColor = "#9a73ef" defaultValue={skill}
//              onChangeText={skill=>setSkills(skill)} />
//         </View>
//         <View style={{flexDirection:'row',marginTop:20,marginLeft:0}}>
           
//             <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
//             placeholder=' Enter your experience'placeholderTextColor = "#9a73ef" defaultValue={exp}
//              onChangeText={exp=>setExp(exp)} />
//         </View>
//         <View style={{flexDirection:'row',marginTop:10}}>
//             <TextInput style={{height:50,width:200,borderWidth:1,borderColor:'green',borderRadius:10,backgroundColor:'#F1F1F1'}} 
//             placeholder='enter your location'placeholderTextColor = "#9a73ef" defaultValue={locations}
//              onChangeText={locations=>setLocation(locations)} />
//         </View>
//         <View style={{marginTop:30}}>
//             <Button title='select resume'onPress={()=>pickFile()} />
//         </View>
       
//         <Text style={{color:'green'}}>{mess} </Text>
//         <Text style={{color:'green'}}>{mess1} </Text>
//        <View style={{marginTop:30,marginLeft:0 ,flexDirection:'row',
//        alignItems:'flex-end',justifyContent:'space-between',marginBottom:50}}>
           
//            <Button  title="back" onPress={()=>navigation.goBack()}/>
//            <View style={{marginLeft:50}}>
//            <Button  title="submit" onPress={()=>register()}/>
//            </View>
//        </View>
       
    
//         </View> */}

  
    
    )
}

export default SignUp
