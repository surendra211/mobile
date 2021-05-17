import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { joberApplied } from '../actions/auth-actions';
const AfterApply=({navigation,route})=> {
    const appliedjob=route.params
    const auth=useSelector(state=>state.auth1)
    const dispatch=useDispatch()
        const seekerEmail=auth.email1
        const jobid=appliedjob._id
        const description=appliedjob.description
        const email=appliedjob.email
        const salary=appliedjob.salary
        const jobtype=appliedjob.jobtype
        const jobtitle=appliedjob.jobtitle
        const exp=appliedjob.exp
        const location=appliedjob.location
        const companyname=appliedjob.companyname
        const name=appliedjob.name
        const user={seekerEmail,jobid,name,companyname,exp,location,description,
            email,salary,jobtype,jobtitle}
        dispatch(joberApplied(user))

       return (
        <View style={{marginTop:30}} >
            <Icon name="arrow-back" size={28} onPress={()=>navigation.navigate("Details")} />
            {/* <Button title="Home" onPress={()=>navigation.navigate('Home',user)}/> */}
            <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:100}}>
            <Text style={{fontSize:16,color:'green'}}>Applied successfully...!</Text>
            
            </View>
            
        </View>
    )
}

export default AfterApply
