import React, { useCallback, useContext, useState } from 'react'
import { View, Text, TextInput, Button,Dimensions,StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import {register1} from "../actions/auth-actions"
//import Pdf from 'react-native-pdf'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as DocumentPicker from 'expo-document-picker'
import * as ExpoFileSystem from 'expo-file-system'
//import {DocumentPicker} from "react-native-document-picker"
//import RNPickerSelect from "react-native-picker-select";
//import RNFetchBlob from "react-native-fetch-blob"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    searchContainer: { 
        height: 50, 
        backgroundColor: '#F1F1F1', 
        borderRadius: 10, 
        flex: 1, 
        flexDirection:'row', 
        alignItems: 'center'
        }, 
        searchContainer1: { 
            height: 50, 
            backgroundColor: '#F1F1F1', 
            borderRadius: 10, 
            flex: 1, 
            flexDirection:'row', 
            alignItems: 'center',
            marginTop:20
            }, 
        sortBtn: { 
            marginLeft: 10, 
            height: 50, 
            width: 50, 
            backgroundColor:'green', 
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius: 10
            } ,
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
const SignUp=({navigation})=> {
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
      // e.preventDefault()
      const skills=skill.toLowerCase()
       const location=locations.toLowerCase()
    //   setSkills(d)
    //   setLocation(j)
     
    const  user={fullname,email,password,phone,qualification,stream,skills,exp,location,avatar}

       if(fullname=="" || email==""||password==""||phone==""||qualification==""||stream==""||
       skills==""||exp==""||location==""|| avatar==null){
           setFile('please fill the form')
       }else{
          //const user1=JSON.stringify({
            //fullname,email,password,phone,qualification,stream,skills,exp,location

          //})
          //console.log("signup component",user)
          dispatch(register1(user))
          clear()
        //   if(auth.message=="registerd successfully....!"){
        //       setFile('now you can signin')
        //   }
        // setTimeout(()=>{
        //     if(auth.message=="registerd successfully....!"){
        //         console.log(auth.message)
        //         return [navigation.navigate('signin')]

        //     }
        // },1000)
       }
   }
   
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

    return (
        <ScrollView>

           {/* <Button title="Select Document" onPress={pickFile} />
            <Button title="Upload" onPress={postDocument} /> */}

            <View style={{backgroundColor:'purple', height:50, alignItems:'center',flexDirection:'row'}}>
 <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} color='white' /> 
        <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:0,
       marginLeft:10}}>Register Screen</Text>
       {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
             onPress={()=>navigation.navigate('signin')}>signin</Text> */}
    </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
        <View>
            <Text style={{color:'green',fontSize:25,marginLeft:0}}>Register Here</Text>
            <Text style={{color:'red',marginLeft:30,marginBottom:10}}>{file}</Text>
        </View>
        {/* <View style={{marginTop:30, flexDirection:'row'}}>
 <View style={styles.searchContainer}>
 <Icon name='search' size={25} style={{marginLeft:20}}/>
 <TextInput placeholder=' Enter you name'/>
 </View>
 <View style={styles.sortBtn}>
 <Icon name='sort' size={30} color='white' />
 </View>
 </View> */}
        <View style={{flexDirection:'row'}}>
            {/* <Text style={{marginTop:8}}>FullName :</Text> */}
            <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder=' Enter your name'placeholderTextColor = "#9a73ef" defaultValue={fullname}
             onChangeText={fullname=>setFullname(fullname)} />
        </View>
        <View style={styles.searchContainer1}>
        {/* <Icon name='email' size={28} color='white'></Icon> */}
            {/* <Text style={{marginTop:8}}>Email :</Text> */}
            <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder=' Enter your email' placeholderTextColor = "#9a73ef" defaultValue={email} textContentType='emailAddress'
             onChangeText={email=>setEmail(email)} />
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
            {/* <Text style={{marginTop:8}}>Password :</Text> */}
            <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder=' Enter your password' placeholderTextColor = "#9a73ef" defaultValue={password} secureTextEntry={true}
             onChangeText={password=>setPassword(password)} />
        </View>
        <View style={{flexDirection:'row',marginTop:20,marginLeft:0}}>
            {/* <Text style={{marginTop:8}}>Phone :</Text> */}
            <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder=' Enter your phone' placeholderTextColor = "#9a73ef" defaultValue={phone} 
             onChangeText={phone=>setPhone(phone)} />
        </View>
        <View style={{flexDirection:'row',marginTop:20,marginLeft:0}}>
            {/* <Text style={{marginTop:8}}>Qualification :</Text> */}
            <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder=' Enter your qualification' placeholderTextColor = "#9a73ef" defaultValue={qualification}
             onChangeText={qualification=>setQualification(qualification)} />
        </View>
        <View style={{flexDirection:'row',marginTop:20,marginLeft:0}}>
            {/* <Text style={{marginTop:8}}>Stream :</Text> */}
            <TextInput style={{height:50,borderWidth:1,borderColor:'green',
            borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder=' Enter your stream'placeholderTextColor = "#9a73ef" defaultValue={stream}
             onChangeText={stream=>setStream(stream)} />
        </View>
        <View style={{flexDirection:'row',marginTop:20,marginLeft:0}}>
            {/* <Text style={{marginTop:8}}>skills :</Text> */}
            <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder=' Enter your skills'placeholderTextColor = "#9a73ef" defaultValue={skill}
             onChangeText={skill=>setSkills(skill)} />
        </View>
        <View style={{flexDirection:'row',marginTop:20,marginLeft:0}}>
            {/* <Text style={{marginTop:8}}>Experience :</Text> */}
            <TextInput style={{height:50,borderWidth:1,borderColor:'green',borderRadius:10,width:200,backgroundColor:'#F1F1F1'}} 
            placeholder=' Enter your experience'placeholderTextColor = "#9a73ef" defaultValue={exp}
             onChangeText={exp=>setExp(exp)} />
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
            {/* <Text style={{marginTop:8}}>Location :</Text> */}
            <TextInput style={{height:50,width:200,borderWidth:1,borderColor:'green',borderRadius:10,backgroundColor:'#F1F1F1'}} 
            placeholder='enter your location'placeholderTextColor = "#9a73ef" defaultValue={locations}
             onChangeText={locations=>setLocation(locations)} />
        </View>
        <View style={{marginTop:30}}>
            <Button title='select resume'onPress={()=>pickFile()} />
        </View>
        {/* <View style={{flexDirection:'row',flex: 1,
         backgroundColor : "#fff",
         alignItems      : "center",
         justifyContent  : "center",}}>
            <Text>
            {locations ?
                  `Location : ${locations} ` :
                    "Location"
                }
            </Text>
            <RNPickerSelect
                onValueChange={(locations) => setLocation(locations)}
                items={[
                    { label: "Hyderabad", value: "Hyderabad" },
                    { label: "Banglore", value: "Banglore" },
                    { label: "Chennai", value: "Chennai" },
                    { label: "Mumbai", value: "Mumbai" },
                    { label: "Delhi", value: "Delhi" },
                    { label: "Amaravathi", value: "Amaravathi" },
                    { label: "guntur", value: "Guntur" },
                    { label: "Pune", value: "Pune" },
                ]}
            />
        </View> */}
        <Text style={{color:'green'}}>{mess} </Text>
        <Text style={{color:'green'}}>{mess1} </Text>
       <View style={{marginTop:30,marginLeft:0 ,flexDirection:'row',
       alignItems:'flex-end',justifyContent:'space-between',marginBottom:50}}>
           
           <Button  title="back" onPress={()=>navigation.goBack()}/>
           <View style={{marginLeft:50}}>
           <Button  title="submit" onPress={()=>register()}/>
           </View>
       </View>
       
    
        </View>

        </ScrollView>
    // <View style={{backgroundColor:'white'}}>
    //     <TextInput style={{height:40,width:200,backgroundColor:'#F1F1F1'}} defaultValue={fullname} onChange={fullname=>setFullname(fullname)} />
    //     <Button onPress={()=>register()} title="register" />
    // </View>
    )
}

export default SignUp
