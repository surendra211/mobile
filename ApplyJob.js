import React, { useEffect, useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { applyjob, signout, updatejobseeker } from '../actions/auth-actions'
import axiosInstance from '../helpers/axios'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler'

const ApplyJob=({navigation,route})=> {
    const user=route.params
    //console.log("apply",user)
    //const user2=user1.params
    const [id,setId]=useState('')
    const [data,setData]=useState([])
    const [email,setEmail]=useState('')
    const [fullname,setFullname]=useState('')
    const [phone,setPhone]=useState('')
    const [qualification,setQualification]=useState('')
    const [stream,setStream]=useState('')
    const [skills,setSkills]=useState('')
    const [exp,setExp]=useState('')
    const [location,setLocation]=useState('')
    const auth=useSelector(state=>state.auth1)
    const dispatch=useDispatch()
    //const [d,setD]=useState(user)

   
    useEffect(()=>{
        const seek=async()=>{ 
            if(auth.authenticate){
                //setD(route.params)
                //d=user
                const resp= await axiosInstance.get(`/jobseekerdetails/${auth.email1}`)
            //      .then(resp=>setData(resp.data))
            //   .catch(err=>console.log('error',err))

            setData(resp.data)
                   
            }else {
                return [navigation.navigate('signin')]
            }
        
        
          
        
    }
    seek()
    },[])  //   if(data.length !=0){
            //       console.log(data)
            //       setData("")
            //   }
            //   const show=()=>{
            //     axiosInstance.get(`/jobseekerdetails/${user.email}`)
            //     .then(resp=>setData(resp.data))
            //  .catch(err=>console.log('error',err))
            //   }
        
       //console.log(auth)
        // useEffect(()=>{
        //     setEmail(data.email)
        // },[])
        const logout=()=>{
            dispatch(signout())
        }

        const applying=()=>{

            const parentId=user._id
            const jobseekerEmail=auth.email1
            const location=data.location
            const phone=data.phone
            const name=data.fullname
            const qualification=data.qualification
            const stream=data.stream
            const exp=data.exp
            const skills=data.skills
            const pass={parentId,jobseekerEmail,name,location,phone,qualification,stream,exp,skills}

            dispatch(applyjob(pass))
            setTimeout(()=>{
                return [navigation.navigate('checking',user)]
            },1000)
            // setTimeout(()=>
            // {return [navigation.navigate('after',user)]},1000
            // )
            //console.log("Apply job component",auth.already)
        //     setTimeout(()=>{
        //         const aut=auth.already
        //     if(aut==='jobseeker already applied a job'){
        //         //auth.already=''
        //         return [navigation.navigate('already')]
        //     }else{
                
        //     return [navigation.navigate('after',user)]
             
        //     }
        // },1000)
            // console.log("jobseeker email",data.email)
            // console.log("jobseeker phone",data.phone)
            // console.log("jobseeker email",user.email)
            // console.log("recruiter email",d._id)
        }
    //    const updating=()=>{
    //       console.log('update')
 
    //         const user={fullname,email,phone,qualification,stream,skills,exp,location}
    //         console.log("component",user)
    //         const id1=data._id
    //         dispatch(updatejobseeker(user,id1))
    //         console.log('success')
        
    
    // }
    return (
        <ScrollView>
            <View style={{backgroundColor:'purple', height:50, alignItems:'center',flexDirection:'row'}}>
 <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} color='white' /> 
        <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginTop:0,
       marginLeft:10}}>Checking Screen</Text>
       {/* <Text style={{color:'white',fontWeight:'bold',fontSize:16,marginRight:10}}
             onPress={()=>navigation.navigate('signin')}>signin</Text> */}
    </View>
             {/* <Icon name="arrow-back" size={28} onPress={()=>navigation.goBack()} /> */}
        <View style={{ flex: 1,marginTop:25,
        justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'row',marginHorizontal:10,marginTop:10,
            justifyContent:'space-between'}}>
               
                {/* <Button onPress={()=>logout()} title="logout" /> */}
                </View> 
             <Text style={{fontSize:20,fontWeight:'bold',
        marginLeft:0,marginBottom:10}}>Chek your details</Text>
        <View style={{flexDirection:"row",marginLeft:0}}>
            {/* <Text style={{fontSize:16,marginTop:5}}>Name :</Text> */}
           <TextInput defaultValue={data.fullname} 
            onChange={fullname=>setFullname(fullname)}
             style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200, backgroundColor:'#F1F1F1',}}></TextInput>
          
        </View>
        <View style={{flexDirection:"row",marginLeft:0,marginTop:10}}>
            {/* <Text style={{fontSize:16,marginTop:5}}>Email :</Text> */}
           <TextInput defaultValue={data.email}
            onChange={email=>setEmail(email)}
             style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200, backgroundColor:'#F1F1F1',}}></TextInput>
          
        </View>
        <View style={{flexDirection:"row",marginLeft:0,marginTop:10}}>
            {/* <Text style={{fontSize:16,marginTop:5}}>Phone :</Text> */}
           <TextInput defaultValue={data.phone} 
            onChange={phone=>setPhone(phone)}
             style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200, backgroundColor:'#F1F1F1',}}></TextInput>
          
        </View>
        <View style={{flexDirection:"row",marginLeft:0,marginTop:10}}>
            {/* <Text style={{fontSize:16,marginTop:5}}>Qualification :</Text> */}
           <TextInput defaultValue={data.qualification} 
            onChange={qualification=>setQualification(qualification)}
             style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200, backgroundColor:'#F1F1F1',}}></TextInput>
          
        </View>
        <View style={{flexDirection:"row",marginLeft:0,marginTop:10}}>
            {/* <Text style={{fontSize:16,marginTop:5}}>stream :</Text> */}
           <TextInput defaultValue={data.stream}
            onChange={stream=>setStream(stream)}
             style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200, backgroundColor:'#F1F1F1',}}></TextInput>
          
        </View>
        <View style={{flexDirection:"row",marginLeft:0,marginTop:10}}>
            {/* <Text style={{fontSize:16,marginTop:5}}>skills :</Text> */}
           <TextInput defaultValue={data.skills} 
            onChange={skills=>setSkills(skills)}
             style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200, backgroundColor:'#F1F1F1',}}></TextInput>
          
        </View>
        <View style={{flexDirection:"row",marginLeft:0,marginTop:10}}>
            {/* <Text style={{fontSize:16,marginTop:5}}>Experience :</Text> */}
           <TextInput defaultValue={data.exp}
            onChange={exp=>setExp(exp)}
             style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10,width:200, backgroundColor:'#F1F1F1',}}></TextInput>
          
        </View>
        <View style={{flexDirection:"row",marginLeft:0,marginTop:10}}>
            {/* <Text style={{fontSize:16,marginTop:5}}>Location :</Text> */}
           <TextInput defaultValue={ data.location} 
            onChange={location=>setLocation(location)}
             style={{height:50,borderColor:'green',borderWidth:1,borderRadius:10, 
             width:200, backgroundColor:'#F1F1F1',}}></TextInput>
          
        </View>
        <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',
         marginLeft:100,marginTop:10,marginRight:50,marginBottom:50}}>
            
        <Button onPress={()=>navigation.navigate('update',data)} title="Update" />
        <View style={{marginLeft:50}}>
        <Button onPress={()=>applying()} title="continue and apply" />
        </View>
        </View>
        
        
        {/* <View>
          <Text>{data.fullname} </Text>
            <Text>{data.email} </Text>
            <Text>{data.phone} </Text>
            <Text>{data.qualification} </Text>
            <Text>{data.stream} </Text>
            <Text>{data.skills} </Text>
            <Text>{data.exp} </Text>
            <Text>{data.location} </Text>
            <Button onPress={()=>logout()} title="logout" />
        </View> */}
        </View>
        </ScrollView>
    )
}
export default ApplyJob
