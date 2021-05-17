import React,{ useEffect, useState } from 'react'
import { View, Text ,FlatList, SafeAreaView,TextInput,Button} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
//import { useSelector } from 'react-redux'
import axiosInstance from '../../helpers/axios'
import Save1 from '../Save1'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import App1 from '../App1';
import {  useDispatch, useSelector } from 'react-redux'
import { signin, signout } from '../../actions/auth-actions'
import HomeScreen from '../HomeScreen'
function SettingsScreen({navigation}) { 
    //const SavedJobs = ({navigation}) => {
        const [data,setData]=useState([])
        const [message,setMessage]=useState('')
        const auth=useSelector(state=>state.auth1)
        const em=auth.email1
        useEffect(()=>{
            const getdata=async()=>{ 
            if(em==""){
                setMessage('please login your account you can see your saved jobs')
            }else{
            const resp=await axiosInstance.get(`/getsaved/${auth.email1}`)
           await setData(resp.data)
            }
        }
        getdata()
        },[])
        console.log(data)
        return (
            <SafeAreaView style={{flex:1,
                backgroundColor:'white',marginLeft:0,
                marginRight:0}}>
                    <View style={{backgroundColor:'purple', height:50, alignItems:'center',flexDirection:'row'}}>
 <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} color='white' /> 
        <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:0,
       marginLeft:10}}>Saved Jobs</Text>
       {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
             onPress={()=>navigation.navigate('signin')}>signin</Text> */}
    </View>
            <View>
                {/* <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} />  */}
                <Text style={{color:'red',
                 fontSize:16,fontWeight:'bold'}}>{message}</Text>
    
               <FlatList columnWrapperStyle=
            
            {{justifyContent:'space-between'}}
     showsVerticalScrollIndicator={true}
     contentContainerStyle={{marginTop:10,paddingBottom:0}}
      
     data={data} numColumns={2} 
     renderItem={({item}) => { 
     return <Save1 plant={item} navigation={navigation} />
     }}
     />
            </View>
            </SafeAreaView>
        )
    }


   function DetailsScreen({navigation}) { 
    const [jobs,setJobs]=useState([])
    const [message,setMessage]=useState('')
    const [message1,setMessage1]=useState('true')
    const auth=useSelector(state=>state.auth1)
    const seekerEmail=auth.email1
    const user={seekerEmail}
    //console.log("component",auth.user1)
   
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
    //console.log(auth)
    return (
        <ScrollView>
               <View style={{backgroundColor:'purple', height:50, alignItems:'center',
             flexDirection:'row'}}>
 <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} color='white' /> 
        <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:0,
       marginLeft:10}}>Applied Jobs</Text>
       {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
             onPress={()=>navigation.navigate('signin')}>signin</Text> */}
    </View>
        <View style={{marginTop:10,}}>
            
             {/* <Icon name="arrow-back" size={28} onPress={()=>navigation.navigate('Home')} /> */}
             <Text style={{color:'red'}}>{message}</Text>
        {/* <Button title='view' onPress={()=>da()} /> */}
            <FlatList columnWrapperStyle= {{justifyContent:'space-between'}}
 showsVerticalScrollIndicator={true}
 contentContainerStyle={{marginTop:10,paddingBottom:0}}
  
 data={jobs} numColumns={2} 
 renderItem={({item}) => { 
 return <App1 plant={item} navigation={navigation} />
}}
/>  
</View>
</ScrollView>  
    )
}

function SignIn1({navigation}){
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
            return [navigation.navigate('Home')]
           // Home()
            // if(auth.authenticate){ 
            // return [navigation.navigate('Home')]
            // }
        }
    }
    //console.log("signin",job)
    const signUP1=()=>{
        return [navigation.navigate('signup')]
    }
//     const Home=()=>{ 
//         console.log('hello')
// //    if(auth.authenticate){
// //         return [navigation.navigate('Home')]
// //     }
// }
    return (
        // <ScrollView>
            
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
              <Icon name='arrow-back' size={28} onPress={()=>navigation.goBack()}
               style={{marginLeft:-360,marginTop:-180,marginBottom:250}} />
             <View>
               
                
                {/* <Form onSubmit={loginUser}> */}
                <TextInput style={{height: 50,borderColor:'green',borderRadius:10,
          borderWidth:1, backgroundColor:'#F1F1F1',marginRight:60,
                marginLeft:60,width:250}} placeholder=" Enter Email"
                keyboardType='email-address' placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
          onChangeText={email => setEmail(email)} defaultValue={email} />
          <TextInput style={{height: 50,width:250,borderColor:'green',borderRadius:10,
          borderWidth:1, backgroundColor:'#F1F1F1',marginTop:10,marginLeft:60,
          marginRight:60}} placeholder=" Enter Password" autoCapitalize = "none" 
          secureTextEntry={true} placeholderTextColor = "#9a73ef"
          onChangeText={password => setPassword(password)} defaultValue={password} />
 </View>
 <View style={{marginTop:20,}}>
<Button onPress={()=>loginUser()} title='Signin'/>

</View>
 
{/* </Form>  */}
            
       
        <View>
    <Text style={{color:'blue',marginLeft:10,marginTop:20,marginBottom:20}}>Are you a new user ?</Text>
    <Button onPress={()=>signUP1()} title="signUp"/>
    <View style={{marginTop:20}}>
    
    </View>
</View>

        </View>
        // </ScrollView>
        
    )
}
function logout({navigation}){
    const auth=useSelector(state=>state.auth1)
    const [message,setMessage]=useState()
    const dispatch=useDispatch()

    useEffect(()=>{
        const log=()=>{ 
    if(auth.authenticate){ 
    dispatch(signout())
    setMessage("logout successfully...")
    }else{
        return [navigation.navigate('Saved Jobs')]
    }
        }
        log()
},[])
    return(
        <View>
            <Icon size={28} color='black'name='arrow-back' onPress={()=>navigation.goBack()} />
            <Text>{message} </Text>
        </View>
    )
}
// const Logout1 = ({navigation}) => {
//     const auth=useSelector(state=>state.auth1)
//     const dispatch=useDispatch()
//     if(auth.authenticate){ 
//     dispatch(signout())
//     }else{
//         return [navigation.navigate('Saved Jobs')]
//     }
//     return (
//         <View style={{marginTop:50}}>
//             <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} /> 
//             <Text style={{color:'red',marginTop:30}}>Logout successfully...! </Text>
//         </View>
//     )
// }
   //const Main = createStackNavigator(); 
const Settings = createBottomTabNavigator() 
function SettingsTabs() { 
 return <>
 <Settings.Navigator>
 <Settings.Screen name="Saved Jobs" component={SettingsScreen}/>
 <Settings.Screen name="Applied Jobs" component={DetailsScreen}/>
 <Settings.Screen name="Signin" component={SignIn1}/>
 <Settings.Screen name="Signout" component={logout} />
 {/* <Settings.Screen name="LogOut" component={Logout1} /> */}
 </Settings.Navigator>
 </>
} 
export default SettingsTabs
