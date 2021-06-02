import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Button } from 'react-native'
import {  useDispatch, useSelector } from 'react-redux'
import axiosInstance from '../helpers/axios'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { getjob } from '../actions/auth-actions';
import { ScrollView } from 'react-native-gesture-handler';
import App1 from './App1';
//import GenericTouchable from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import DetailScreen from './DetailScreen';
//import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const AppliedJobs = ({navigation}) => {

    const [jobs,setJobs]=useState([])
    const [message,setMessage]=useState('')
    const [message1,setMessage1]=useState('true')
    const auth=useSelector(state=>state.auth1)
    const seekerEmail=auth.email1
    const user={seekerEmail}
    console.log("component",auth.email1)
   
    const dispatch=useDispatch()
    
    useEffect(()=>{
        // dispatch(getjob(seekerEmail))
        // setTimeout(()=>
        // setJobs(auth.user1),1000
        // )
        const getdata=async()=>{
            if(seekerEmail==""){
                setMessage("please Login your account you can see your Applied jobs")
            }else{ 
        const resp=await axiosInstance.get(`/getapply/${seekerEmail}`)
        setJobs(resp.data)
    }}
        getdata()
    },[])
    
    // const da=()=>{ 
    // dispatch(getjob(seekerEmail))
    // setTimeout(()=>
    //  setJobs(auth.user1),1000
    //  )
    // }
    // if(message1){ 
    //     setMessage1('false')
    //     axiosInstance.get('/getapply',seekerEmail).then(res=>setJobs(res.data))
    //     .catch(err=>console.log(err))
        
    // }
    // if(jobs.length==0){
    //     setMessage("no applied jobs")
    //     setJobs()
    // }
    console.log(seekerEmail)
    return (
//         <ScrollView>
          
//         <View style={{marginTop:10,backgroundColor:'white',}}>
            
//              <Icon name="arrow-back" size={28} onPress={()=>navigation.navigate('Home')} />
//              <Text style={{color:'red'}}>{message}</Text>
//         {/* <Button title='view' onPress={()=>da()} /> */}
            
            
            
//             <FlatList columnWrapperStyle= 
//             {{flexDirection:'row'}}
//                 showsVerticalScrollIndicator={true}
//                 contentContainerStyle={{marginTop:10,paddingBottom:0}}
                
//                 data={jobs} numColumns={2} 
//                 renderItem={({item}) => { 
//                 return <App1 plant={item} navigation={navigation} />
//                 }}
//                 />  
// </View>
// </ScrollView>  




<SafeAreaView style={{flex:1,flexDirection:'column',
    backgroundColor:'green',marginLeft:10,
    marginRight:0}}>
        
<View>
<Text>sdkshakdjksdsdskl</Text>
   <FlatList columnWrapperStyle=

{{flexDirection:'row'}}
showsVerticalScrollIndicator={true}
contentContainerStyle={{marginTop:0,paddingBottom:0}}

data={jobs} numColumns={2} 
renderItem={({item}) => { 
return <App1 plant={item} navigation={navigation} />
}}
/>
</View>
</SafeAreaView>
    )
}

export default AppliedJobs
